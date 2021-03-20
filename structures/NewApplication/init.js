// Application
if (State.usersReducer.apps.find(app => app.settings.name === Parameters.Name)) {
    const error = 'Application with the same name exists'
    Store.dispatch({ type: "SET_ERROR", error: error })
    return false
}

const defaultTemplate = State.templatesReducer.templates.filter(template => template.default )
State.templatesReducer.loadedTemplate = defaultTemplate[0]
const username = aptugo.friendly(State.auth.user.name)
const dbpassword = aptugo.generateID() + aptugo.generateID()
const appname = aptugo.friendly(Parameters.Name)
const dbusername = username + appname
Application.createdAt = Date.now(),
Application.settings = {
    name: Parameters.Name || 'Untitled Application',
    development: {
      apiURL: `http://localhost:4567`,
      type: 'Local',
      folder: appname,
      template: defaultTemplate ? defaultTemplate[0]._id : '',
      url: `https://${appname.toLowerCase()}_${username.toLowerCase()}.aptugo.com`,
      dbconnectstring: `mongodb://localhost:27017/${username}`
    },
    stagging: {
      apiURL: `https://${appname}.aptugo.com:3456`,
      type: 'Local',
      folder: `${appname}_stagging`,
      template: defaultTemplate ? defaultTemplate[0]._id : '',
      url: `https://${appname.toLowerCase()}_${username.toLowerCase()}.aptugo.com`,
      dbconnectstring: `mongodb://localhost:27017/${username}`
    },
    production: {
      apiURL: `https://${appname}.aptugo.com:3456`,
      type: 'Local',
      folder: appname,
      template: defaultTemplate ? defaultTemplate[0]._id : '',
      url: `https://${appname.toLowerCase()}.aptugo.com`,
      dbconnectstring: `mongodb://${dbusername}:${dbpassword}@localhost:27017/${username}?authSource=admin`
    }
}


// aptugo.createdbuser({ dbName: username, user: dbusername, pwd: dbpassword })



Application._id = aptugo.generateID(16)
return Application
