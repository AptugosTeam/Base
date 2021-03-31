Parameters.unique_id = aptugo.generateID()
const untitledTables = Application.tables.filter(table => table.name.substr(0,8) === 'Untitled').length
const name = `Untitled ${untitledTables > 0 ? untitledTables : ''}`
const singleName = `Required ${untitledTables > 0 ? untitledTables : ''}`
const newTable = {
	type: 'table',
    unique_id: Parameters.unique_id,
	name: name,
    singleName: singleName,
	subtype: 'Aptugo',
	children: [],
	fields: [
		{
			CHARACTER_MAXIMUM_LENGTH: "11",
			column_name: "ID",
			data_type: "Integer",
			key: "Auto Number"
		}
	]
}

if (!Application.tables) Application.tables = []
Application.tables.push(newTable)

return Application