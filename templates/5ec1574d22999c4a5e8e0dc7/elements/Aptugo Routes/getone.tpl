{% if table.beforeRetrieve %}{{ table.beforeRetrieve }}{% endif %}
{{ table.name | friendly | lower }}.findOne(req, res)
