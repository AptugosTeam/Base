{% set reference = field.reference | fieldData %}
updatedData['{{ field.column_name | friendly }}'] = []
try {
  var ObjectId = require('mongodb').ObjectID
  const {{ reference.table.name | friendly }} = require('../models/{{ reference.table.name | friendly | lower }}.model.js')
  let Received{{ field.column_name | friendly }} =  JSON.parse(req.body.{{ field.column_name | friendly }})
  {{ field.column_name | friendly }}Raw = Array.isArray(Received{{ field.column_name | friendly }}) ? Received{{ field.column_name | friendly }} : [Received{{ field.column_name | friendly }}]
  {{ field.column_name | friendly }}Raw.forEach({{ field.column_name | friendly }}info => {
    if (!{{ field.column_name | friendly }}info._id) {
      const {{ field.column_name | friendly }}ID = new ObjectId()
      const {{ reference.table.singleName | friendly }} = new {{ reference.table.name | friendly }}({ ...{{ field.column_name | friendly }}info, _id: {{ field.column_name | friendly }}ID })
      {{ reference.table.singleName | friendly }}.save()
      updatedData['{{ field.column_name | friendly }}'].push({{ field.column_name | friendly }}ID)
    } else {
      updatedData['{{ field.column_name | friendly }}'].push({{ field.column_name | friendly }}info._id)
    }
  })
} catch(e) {
    updatedData['{{ field.column_name | friendly }}'] = req.body.{{ field.column_name | friendly }}
}
