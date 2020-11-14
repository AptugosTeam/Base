{% set reference = field.reference | fieldData %}
try {
  const {{ field.column_name | friendly }}info = JSON.parse(req.body.{{ field.column_name | friendly }})
  const {{ field.column_name | friendly }}ID = new ObjectId()
  delete {{ field.column_name | friendly }}info._id
  const {{ reference.table.name | friendly }} = require('../models/{{ reference.table.name | friendly | lower }}.model.js')
  const {{ reference.table.singleName | friendly }} = new {{ reference.table.name | friendly }}({ _id: {{ field.column_name | friendly }}ID, ...{{ field.column_name | friendly }}info })
  {{ reference.table.singleName | friendly }}.save()
  updatedData['{{ field.column_name | friendly }}'] = {{ field.column_name | friendly }}ID
} catch(e) {
    updatedData['{{ field.column_name | friendly }}'] = req.body.{{ field.column_name | friendly }}
}
