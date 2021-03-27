Parameters.table_unique_id = aptugo.generateID()

const newTable = {
	"unique_id": Parameters.table_unique_id,
	"type": "table",
	"name": Parameters["User Table"],
	"singleName": "single" + Parameters["User Table"],
	"subtype": "Aptugo",
	"children": [],
	"fields": [{
		"column_name": "Email",
		"data_type": "String"
	}, {
		"data_type": "Password",
		"column_name": "Password"
	}, {
		"data_type": "String",
		"column_name": "Name"
	}],
	"beforeCreate": "const response = userService.jwtVerify(req.headers.authorization)\nif (response.error) res.status(401).json(response)\nif (req.body.Password) req.body.Password = userService.cryptPassword(req.body.Password)\n",
	"beforeUpdate": "const response = userService.jwtVerify(req.headers.authorization)\nif (response.error) res.status(401).json(response)\nif (req.body.Password) req.body.Password = userService.cryptPassword(req.body.Password)\n",
	"extraRoutes": "// Authenticate User\n  app.post(\"/api/users/authenticate\", function (req, res) {\n    userService.authenticate(req.body)\n      .then(user => {\n        res.json(user)\n      })\n      .catch(next => {\n        console.log(next)\n      })\n    }\n  )",
	"extraModules": "const userService = require('../services/users.service')"
}

if (!Application.tables) Application.tables = []
Application.tables.push(newTable)


return Application