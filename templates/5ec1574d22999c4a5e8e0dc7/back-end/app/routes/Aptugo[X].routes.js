module.exports = (app) => {
  const {{ table.name | friendly | lower }} = require('../controllers/{{ table.name | friendly | lower }}.controller.js')
  {% if table.extraModules %}{{ table.extraModules }}{% endif %}

  // Create a new {{ table.singleName | friendly }}
  app.post('/api/{{ table.name | friendly | lower }}', (req, res) => {
    {% if table.beforeCreate %}{{ table.beforeCreate }}{% endif %}

    {{ table.name | friendly | lower }}.create(req, res)
  })

  // Retrieve all {{ table.name | friendly }}
  app.get('/api/{{ table.name | friendly | lower }}', (req, res) => {
  {% if table.beforeRetrieve %}{{ table.beforeRetrieve }}{% endif %}
  
  {{ table.name | friendly | lower }}.findAll(req, res)
  })

// Perform a search
  app.get('/api/{{ table.name | friendly | lower }}/search/', (req, res) => {
  {% if table.beforeRetrieve %}{{ table.beforeRetrieve }}{% endif %}
  
  {{ table.name | friendly | lower }}.find(req, res)
  })
  
  // Retrieve a single {{ table.singleName | friendly }} with ID
  app.get('/api/{{ table.name | friendly | lower }}/:ID', (req, res) => {
  {% if table.beforeRetrieve %}{{ table.beforeRetrieve }}{% endif %}
  
  {{ table.name | friendly | lower }}.findOne(req, res)
  })

  
  
  // Update a {{ table.singleName | friendly }} with ID
  app.put('/api/{{ table.name | friendly | lower }}/:ID', (req, res) => {
    {% if table.beforeUpdate %}{{ table.beforeUpdate }}{% endif %}

    {{ table.name | friendly | lower }}.update(req, res)
  })

  // Delete a {{ table.singleName | friendly }} with ID
  app.delete('/api/{{ table.name | friendly | lower }}/:ID', {{ table.name | friendly | lower }}.delete)
  
  {% if table.extraRoutes %}{{ table.extraRoutes }}{% endif %}
}
