const {{ table.name | friendly }} = require('../models/{{ table.name | friendly | lower }}.model.js')
const fs = require('fs')
const paginate = require('../paginate')
var ObjectId = require('mongodb').ObjectID

{% for field in table.fields %}
  {% set fieldWithData = field | fieldData %}
  {% include includeTemplate(['Fields' ~ field.data_type ~'updateImports.tpl', 'FieldsupdateImports.tpl']) %}
{% endfor %}

// Create and Save a new {{ table.singleName | friendly }}
exports.create = (options) => {
  const data = options.req ? options.req.body : options.data
  const updatedData = {}

  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'update.tpl', 'Fieldsupdate.tpl']) %}
  {% endfor %}
  
  // Create a {{ table.singleName | friendly }}
  const {{ table.singleName | friendly }} = new {{ table.name | friendly }}(updatedData)

  // Save {{ table.singleName | friendly }} in the database
  {{ table.singleName | friendly }}.save()
    .then(data => {
      exports.findOne({ ID: data._id, res: options.res })
    }).catch(err => {
      options.res.status(500).send({
        message: err.message || "Some error occurred while saving the record."
      })
    })
}

exports.createAsPromise = (options) => {
  return new Promise((resolve, reject) => {
    const data = options.req ? options.req.body : options.data
    const updatedData = {}

    {% for field in table.fields %}
      {% set fieldWithData = field | fieldData %}
      {% include includeTemplate(['Fields' ~ field.data_type ~'update.tpl', 'Fieldsupdate.tpl']) %}
    {% endfor %}
  
    // Create a {{ table.singleName | friendly }}
    const {{ table.singleName | friendly }} = new {{ table.name | friendly }}(updatedData)

    // Save {{ table.singleName | friendly }} in the database
    {{ table.singleName | friendly }}.save()
    .then(result => {
      exports.findOne({ ID: result._id, res: options.res })
     })
    .catch(err => { reject(err) })
  })
}

// Retrieve and return all {{ table.name | friendly }} from the database.
exports.findAll = (options) => {
  const query = options.query ? options.query : options.req.query
  const data = options.req ? options.req.body : options.data
  if (typeof query.sort === 'string') query.sort = JSON.parse(query.sort)

  {{ table.name | friendly }}.find()
  .sort( query.sort && { [query.sort.field]: query.sort.method === 'DESC' ? 1 : -1 })
   {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then({{ table.name | friendly | lower }} => {
      options.res.json(paginate.paginate({{ table.name | friendly | lower }}, { page: query.page, limit: query.limit || 10 }))
    }).catch(err => {
      options.res.status(500).send({
        message: err.message || "Some error occurred while retrieving records."
      })
    })
}

exports.find = (options) => {
  const query = options.query ? options.query : options.req.query
  const data = options.req ? options.req.body : options.data
  let findString =  query.searchString ? { $text: { $search: query.searchString } } : {}
  if (query.searchField) {
    findString = { [query.searchField]: query.searchString }
    if ({{ table.name | friendly }}.schema.path(query.searchField).instance === 'ObjectID') {
      findString = { [query.searchField]: ObjectId(query.searchString) }
    }
  }
  if (typeof query.sort === 'string') query.sort = JSON.parse(query.sort)

  {{ table.name | friendly }}.find(findString)
  .sort( query.sort && { [query.sort.field]: query.sort.method === 'DESC' ? 1 : -1 })
  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then(({{ table.singleName | friendly | lower }}) => {
      options.res.json(paginate.paginate({{ table.singleName | friendly | lower }}, { page: query.page, limit: query.limit || 10 }))
    })
    .catch((err) => {
      options.res.status(500).send({
        message: err.message || 'Some error occurred while retrieving records.',
      })
    })
}

// Find a single {{ table.singleName | friendly }} with a ID
exports.findOne = ( options ) => {
  const id = options.req ? options.req.params.ID : options.ID
  {{ table.name | friendly }}.findById(id)
  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then({{ table.singleName | friendly | lower }} => {
      if(!{{ table.singleName | friendly | lower }}) {
          return options.res.status(404).send({
            message: "{{ table.singleName | friendly }} not found with id " + id
          })     
      }
      options.res.send(paginate.paginate([{{ table.singleName | friendly | lower }}]))
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return options.res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + id
        })
      }
      return options.res.status(500).send({
        message: "Error retrieving {{ table.singleName | friendly }} with id " + id
      })
    })
}

// Update a {{ table.singleName | friendly | lower }} identified by the ID in the request
exports.update = (options) => {
  return new Promise((resolve, reject) => {
    const id = options.req ? options.req.params.ID : options.ID
    const data = options.req ? options.req.body : options.data
    const updatedData = {}

    {% for field in table.fields %}
      {% set fieldWithData = field | fieldData %}
      {% include includeTemplate(['Fields' ~ field.data_type ~'update.tpl', 'Fieldsupdate.tpl']) %}
    {% endfor %}
    
    // Find {{ table.singleName }} and update it with the request body
    {{ table.name | friendly }}.findByIdAndUpdate(id, updatedData, {new: true})
    {% for field in table.fields %}
      {% set fieldWithData = field | fieldData %}
      {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl']) %}
    {% endfor %}
      .then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
  })

  
}

// Delete a {{ table.singleName | friendly | lower }} with the specified ID in the request
exports.delete = (options) => {
  const id = options.req ? options.req.params.ID : options.ID
  {{ table.name | friendly }}.findByIdAndRemove(id)
    .then({{ table.singleName | friendly | lower }} => {
      if(!{{ table.singleName | friendly | lower }}) {
        return options.res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + id
        })
      }
      options.res.send({message: "{{ table.singleName | friendly }} deleted successfully!"});
    }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return options.res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + id
        })
      }
      return options.res.status(500).send({
        message: "Could not delete {{ table.singleName | friendly }} with id " + id
      })
  })
}
