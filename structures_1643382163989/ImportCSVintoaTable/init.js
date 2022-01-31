Parameters.unique_id = aptugo.generateID()
Parameters.fields = []

const untitledTables = Application.tables.filter(table => table.name.substr(0,8) === 'Untitled').length
const name = aptugo.friendly(Parameters.Name).toLowerCase()
const singleName = `${aptugo.friendly(Parameters.Name).toLowerCase()}record`

const readUploadedFileAsText = () => {
  var reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = function(e) {
      var contents = e.target.result
      var finalFields = []
      var lines = this.result.split('\n')
      var headers = lines.shift()
      var fields = headers.split(',')
      fields.forEach(field => {
        Parameters.fields.push(aptugo.friendly(field))
        finalFields.push({
          column_name: aptugo.friendly(field),
          data_type: "String",
          unique_id: aptugo.generateID()
        })
      })

      const newTable = {
        type: 'table',
        unique_id: Parameters.unique_id,
        name: name,
        singleName: singleName,
        subtype: 'Aptugo',
        children: [],
        fields: finalFields
      }
      resolve(newTable)
    }
    reader.readAsText(Parameters.csv)
  })
}

const newTable = await readUploadedFileAsText() 
if (!Application.tables) Application.tables = []
Application.tables.push(newTable)
return Application
