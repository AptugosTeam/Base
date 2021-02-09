{% if table.beforeUpdate %}{{ table.beforeUpdate }}{% endif %}
{{ table.name | friendly | lower }}.update(req, res)
