/*
path: index.js
type: file
unique_id: UkXBqfSH
icon: nodejs.svg
sourceType: javascript
children: []
*/
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env.development' })

const express = require('express')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
{% if settings.apiURL|slice(0,5) == 'https' %}
const https = require('https')
{% endif %}
const app = express()
app.set('filesFolder', __dirname + '/../dist/img')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, XMLHttpRequest, authorization, *")
  res.header("Access-Control-Allow-Methods", "*")
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use( fileupload() )

{{ insert_setting('ServerAddenum') | raw }}

const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("Successfully connected to the database")  
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
  // process.exit();
})

require('./app/routes/apiRoutes.js')(app)
{% for table in application.tables %}
require('./app/routes/{{ table.name | friendly | lower }}.routes.js')(app)
{% endfor %}

{{ insert_setting('ServerRoute') | raw }}

app.use('/api/images', express.static('./uploads'))

let tries = 0

function doListen() {
  const port = {{ insert_setting('port')|default('4567') }}
  {% if settings.apiURL|slice(0,5) == 'https' %}
  https.createServer({
    key: fs.readFileSync({{ insert_setting('key') }}, 'utf8'),
    cert: fs.readFileSync({{ insert_setting('cert') }}, 'utf8'),
    ca: fs.readFileSync({{ insert_setting('ca') }}, 'utf8')
    }, app)
  {% else %}
    app
  {% endif %}
    .listen(port,'0.0.0.0')
    .on('listening', () => {
      console.log(`Aptugo app listening on port ${port}!`)
    })
    .on('error', (err) => {
      if (err.errno === 'EADDRINUSE') {
        if (tries < 3) {
          console.log('Port busy, waiting a couple of seconds...')
          tries++
          setTimeout(doListen, 2000)
        } else {
          console.log('Tired of waiting, will kill the process...')
          exec(`kill -9 $(lsof -t -i:${port})`)
          setTimeout(doListen, 2000)
        }
        
      } else {
        console.log(err)
      }
    })
    .on('connection', (conn) => {
      console.log('connection')
    })
}

doListen()

