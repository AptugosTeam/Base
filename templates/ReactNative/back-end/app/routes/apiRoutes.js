/*
path: apiRoutes.js
completePath: back-end/app/routes/apiRoutes.js
unique_id: OTfdPo69
*/
const axios = require('axios')
const memCache = require('./../services/memCache.service.js')

module.exports = (app) => {
  app.get('/api/apicall/:url/:cachetimeout?', (req, res, next) => {
    const mc = new memCache()
    const url = req.params.url
    var data = mc.getMemCache(url, req.params.cachetimeout || 10080)
    if (!data) {
      axios.get(url).then((result) => {
        mc.save(url, result.data)
        res.json(result.data)
      })
    } else {
      res.json(JSON.parse(data))
    }
  })

  {% set extraRoutes = insert_setting('ExtraRoutes') %}
  {% if extraRoutes %}
    require('./../services/{{ extraRoutes }}.js')(app)
  {% endif %}
}
