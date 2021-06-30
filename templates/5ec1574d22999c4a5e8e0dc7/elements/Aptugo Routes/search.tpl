{% if table.beforeRetrieve %}{{ table.beforeRetrieve }}{% endif %}
{{ table.name | friendly | lower }}.find({ req, res })
