Parameters.table_unique_id = aptugo.generateID()

const newTable = {
	"unique_id": Parameters.table_unique_id,
	"type": "table",
	"name": Parameters["User Table"],
	"singleName": "single" + Parameters["User Table"],
	"subtype": "Aptugo",
	"children": [],
	"fields": [{
		column_name: "FirstName",
		data_type: "String",
		displaylabel: "First Name",
		prompt: "First Name"
	}, {
		column_name: "LastName",
		data_type: "String",
		displaylabel: "Last Name",
		prompt: "Last Name"
	}, {
		column_name: "Email",
		data_type: "String",
		displaylabel: "Email",
		prompt: "Email"
	}, {
		column_name: "Password",
		data_type: "Password"
	}, {
		column_name: "ProfilePic",
		data_type: "Image",
		displaylabel: "Profile Picture",
		prompt: "Profile Picture"
	}, {
		column_name: "Role",
		data_type: "Dropdown",
		options: "User;Admin"
	}],
	"beforeCreate": "const response = userService.jwtVerify(req.headers.authorization)\nif (response.error) res.status(401).json(response)\n",
	"beforeUpdate": "const response = userService.jwtVerify(req.headers.authorization)\nif (response.error) res.status(401).json(response)\n",
	"extraRoutes": "// Authenticate User\n  app.post(\"/api/users/authenticate\", function (req, res) {\n    userService.authenticate(req.body)\n      .then(user => {\n        res.json(user)\n      })\n      .catch(next => {\n        console.log(next)\n      })\n    }\n  )",
	"extraModules": "const userService = require('../services/users.service')"
}

if (!Application.tables) Application.tables = []
Application.tables.push(newTable)


return Application