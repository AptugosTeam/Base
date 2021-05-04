/*
path: add.tpl
type: file
unique_id: fzm5tmGI
icon: ico-field
children: []
*/
{% if table.beforeCreate %}{{ table.beforeCreate }}{% endif %}
{{ table.name | friendly | lower }}.create(req, res)
