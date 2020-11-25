const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('{{ settings.dbconnectstring | raw }}')

const modelDefiners = [
	{% for table in application.tables %}
		require('./models/{{ table.name | friendly | lower }}.model.js'),
	{% endfor %}
]

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize)
}

sequelize.sync()

module.exports = sequelize