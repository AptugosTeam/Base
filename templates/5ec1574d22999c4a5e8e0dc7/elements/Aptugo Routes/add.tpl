{% if table.beforeCreate %}{{ table.beforeCreate }}{% endif %}
{{ table.name | friendly | lower }}.create(req, res)
