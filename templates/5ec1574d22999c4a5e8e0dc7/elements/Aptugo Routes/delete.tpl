{% if table.beforeDelete %}{{ table.beforeDelete }}{% endif %}
{{ table.name | friendly | lower }}.delete(req, res)
