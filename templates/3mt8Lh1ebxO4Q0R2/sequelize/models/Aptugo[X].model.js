const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('{{ table.name | friendly }}', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		{% for field in table.fields %}
            {% set fieldInfo = field | fieldData %}
            {{ field.column_name | friendly }}: {
				type: DataTypes.{{ fieldInfo.dataType }},
			},
        {% endfor %}
	});
};