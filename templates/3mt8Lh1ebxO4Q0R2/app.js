const express = require('express')
const app = express()

const routes = {
	{% for table in application.tables %}
		{{ table.name | friendly | lower }}: require('./routes/{{ table.name | friendly | lower }}.routes.js'),
	{% endfor %}
}

function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res)
		} catch (error) {
			next(error)
		}
	}
}

app.get('/', (req, res) => {
	res.send(`
		<h2>{{ application.settings.name }} running</h2>
	`);
})

for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.getAll)
		)
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.getById)
		)
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.create)
		)
	}
	if (routeController.update) {
		app.put(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.update)
		)
	}
	if (routeController.remove) {
		app.delete(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.remove)
		)
	}
}

module.exports = app