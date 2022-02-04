/*
path: update.tpl
completePath: elements/Fields/Autocomplete/update.tpl
unique_id: zd6mrTlU
*/
{% set reference = field.reference | fieldData %}
{% if field.relationshipType == 'm:1' %}
  if (data.{{ field.column_name | friendly }} === 'null') data.{{ field.column_name | friendly }} = null
  updatedData['{{ field.column_name | friendly }}'] = {}
  try {
    const {{ reference.table.name | friendly }} = require('../models/{{ reference.table.name | friendly | lower }}.model.js')
    let Received{{ field.column_name | friendly }} =  (typeof data.{{ field.column_name | friendly }} === 'string') ? JSON.parse(data.{{ field.column_name | friendly }}) : data.{{ field.column_name | friendly }} 
    {{ field.column_name | friendly }}info = Array.isArray(Received{{ field.column_name | friendly }}) ? Received{{ field.column_name | friendly }}[0] : Received{{ field.column_name | friendly }}
    
    if (!{{ field.column_name | friendly }}info._id) {
      const {{ field.column_name | friendly }}ID = require('mongoose').Types.ObjectId()
      const {{ reference.table.singleName | friendly }} = new {{ reference.table.name | friendly }}({ ...{{ field.column_name | friendly }}info, _id: {{ field.column_name | friendly }}ID })          
      {{ reference.table.singleName | friendly }}.save()
      updatedData['{{ field.column_name | friendly }}'] = {{ field.column_name | friendly }}ID
    } else {
      updatedData['{{ field.column_name | friendly }}'] = {{ field.column_name | friendly }}info._id
    }  
  } catch (e) {
    updatedData['{{ field.column_name | friendly }}'] = data.{{ field.column_name | friendly }}
  }
{% elseif field.relationshipType == '1:1' %}
  updatedData['{{ field.column_name | friendly }}'] = {}
  try {
    const {{ reference.table.name | friendly }} = require('../models/{{ reference.table.name | friendly | lower }}.model.js')
    let Received{{ field.column_name | friendly }} =  (typeof data.{{ field.column_name | friendly }} === 'string') ? JSON.parse(data.{{ field.column_name | friendly }}) : data.{{ field.column_name | friendly }} 
    {{ field.column_name | friendly }}info = Array.isArray(Received{{ field.column_name | friendly }}) ? Received{{ field.column_name | friendly }}[0] : Received{{ field.column_name | friendly }}
    if (!{{ field.column_name | friendly }}info._id) {
      const {{ field.column_name | friendly }}ID = require('mongoose').Types.ObjectId()
      const {{ reference.table.singleName | friendly }} = new {{ reference.table.name | friendly }}({ ...{{ field.column_name | friendly }}info, _id: {{ field.column_name | friendly }}ID })
      {{ reference.table.singleName | friendly }}.save()
      updatedData['{{ field.column_name | friendly }}'] = {{ field.column_name | friendly }}ID
    } else {
      updatedData['{{ field.column_name | friendly }}'] = {{ field.column_name | friendly }}info._id
    }
  } catch (e) {
    updatedData['{{ field.column_name | friendly }}'] = data.{{ field.column_name | friendly }}
  }
{% else %}
  updatedData['{{ field.column_name | friendly }}'] = []
  try {
    const {{ reference.table.name | friendly }} = require('../controllers/{{ reference.table.name | friendly | lower }}.controller.js')
    let Received{{ field.column_name | friendly }} =  (typeof data.{{ field.column_name | friendly }} === 'string') ? JSON.parse(data.{{ field.column_name | friendly }}) : data.{{ field.column_name | friendly }} 
    {{ field.column_name | friendly }}Raw = Array.isArray(Received{{ field.column_name | friendly }}) ? Received{{ field.column_name | friendly }} : [Received{{ field.column_name | friendly }}]
    {{ field.column_name | friendly }}Raw.forEach({{ field.column_name | friendly }}info => {
      const {{ field.column_name | friendly }}Files = {}
      {% if reference.data_type == 'Image' %}
      if ({{ field.column_name | friendly }}info && {{ field.column_name | friendly }}info.data) {
        fs.writeFileSync(`${options.req.app.get('filesFolder')}/${ {{ field.column_name | friendly }}info.name}`, {{ field.column_name | friendly }}info.data)
        {{ field.column_name | friendly }}info.{{ reference.column_name | friendly }} = {{ field.column_name | friendly }}info.name
      }
      {% endif %}

      if (!{{ field.column_name | friendly }}info._id) {
        const {{ field.column_name | friendly }}ID = require('mongoose').Types.ObjectId()

        Object.keys({{ field.column_name | friendly }}info).forEach(info => {
          if (typeof {{ field.column_name | friendly }}info[info] === 'object' && typeof {{ field.column_name | friendly }}info[info].name === 'string') {
            {{ field.column_name | friendly }}Files[info] = {{ field.column_name | friendly }}info[info]
          }
        })

        let req = options.req
        req.body = { ...{{ field.column_name | friendly }}info, _id: {{ field.column_name | friendly }}ID }
        req.files = { ...{{ field.column_name | friendly }}Files }
        {{ reference.table.name | friendly }}.createAsPromise({ req, res: options.res })
        updatedData['{{ field.column_name | friendly }}'].push({{ field.column_name | friendly }}ID)
      } else {
        updatedData['{{ field.column_name | friendly }}'].push({{ field.column_name | friendly }}info._id)
      }
    })
  } catch(e) {
      updatedData['{{ field.column_name | friendly }}'] = data.{{ field.column_name | friendly }}
  }
{% endif %}

