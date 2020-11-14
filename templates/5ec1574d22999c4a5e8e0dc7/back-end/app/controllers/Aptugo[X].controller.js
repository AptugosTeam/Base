const {{ table.name | friendly }} = require('../models/{{ table.name | friendly | lower }}.model.js')
const fs = require('fs')
const paginate = require('../paginate')
{% for field in table.fields %}
  {% set fieldWithData = field | fieldData %}
  {% include includeTemplate(['Fields' ~ field.data_type ~'updateImports.tpl', 'FieldsupdateImports.tpl']) %}
{% endfor %}

// Create and Save a new {{ table.singleName | friendly }}
exports.create = (req, res) => {
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
      req.params.ID = data._id
      exports.findOne(req, res)
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the record."
      })
    })
}

// Retrieve and return all {{ table.name | friendly }} from the database.
exports.findAll = (req, res) => {
  {{ table.name | friendly }}.find()
   {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then({{ table.name | friendly | lower }} => {
      res.json(paginate.paginate({{ table.name | friendly | lower }}, { page: req.query.page, limit: req.query.limit || 10 }))
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records."
      })
    })
}

exports.find = (req, res) => {
  let findString =  req.query.searchString ? { $text: { $search: req.query.searchString } } : {}
  if (req.query.searchField) {
    findString = { [req.query.searchField]: req.query.searchString }
  }
  {{ table.name | friendly }}.find(findString)
  .sort( { [req.query.sortColumn]: req.query.sortMethod === 'DESC' ? 1 : -1 })
  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then(({{ table.singleName | friendly | lower }}) => {
      res.json(paginate.paginate({{ table.singleName | friendly | lower }}, { page: req.query.page, limit: req.query.limit || 10 }))
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving records.',
      })
    })
}

// Find a single {{ table.singleName | friendly }} with a ID
exports.findOne = (req, res) => {
  {{ table.name | friendly }}.findById(req.params.ID)
  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl', 'Fieldsfind.tpl']) %}
  {% endfor %}
    .then({{ table.singleName | friendly | lower }} => {
      if(!{{ table.singleName | friendly | lower }}) {
          return res.status(404).send({
            message: "{{ table.singleName | friendly }} not found with id " + req.params.ID
          })     
      }
      res.send(paginate.paginate([{{ table.singleName | friendly | lower }}]))
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + req.params.ID
        })
      }
      return res.status(500).send({
        message: "Error retrieving {{ table.singleName | friendly }} with id " + req.params.ID
      })
    })
}

// Update a {{ table.singleName | friendly | lower }} identified by the ID in the request
exports.update = (req, res) => {
  const updatedData = {}

  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'update.tpl', 'Fieldsupdate.tpl']) %}
  {% endfor %}
  
  // Find {{ table.singleName }} and update it with the request body
  {{ table.name | friendly }}.findByIdAndUpdate(req.params.ID, updatedData, {new: true})
  {% for field in table.fields %}
    {% set fieldWithData = field | fieldData %}
    {% include includeTemplate(['Fields' ~ field.data_type ~'find.tpl']) %}
  {% endfor %}
    .then({{ table.singleName | friendly | lower }} => {
      if(!{{ table.singleName | friendly | lower }}) {
        return res.status(404).send({
          message: "{{ table.singleName }} not found with id " + req.params.ID
        })
      }
      res.send({{ table.singleName | friendly | lower }})
    }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + req.params.ID
        })           
      }
      return res.status(500).send({
        message: "Error updating {{ table.singleName | friendly }} with id " + req.params.ID
      })
    })
}

// Delete a {{ table.singleName | friendly | lower }} with the specified ID in the request
exports.delete = (req, res) => {
  {{ table.name | friendly }}.findByIdAndRemove(req.params.ID)
    .then({{ table.singleName | friendly | lower }} => {
      if(!{{ table.singleName | friendly | lower }}) {
        return res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + req.params.ID
        })
      }
      res.send({message: "{{ table.singleName | friendly }} deleted successfully!"});
    }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "{{ table.singleName | friendly }} not found with id " + req.params.ID
        })
      }
      return res.status(500).send({
        message: "Could not delete {{ table.singleName | friendly }} with id " + req.params.ID
      })
  })
}
