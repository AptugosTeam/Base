/*
path: find.tpl
completePath: elements/Fields/Autocomplete/find.tpl
unique_id: t9Bzg4Oy
*/
{% set ref = field.reference | fieldData %}
{% if ref.table.subtype == 'Aptugo' %}
.populate({ model: '{{ ref.table.name | friendly }}', path: '{{ field.column_name }}' })
{% endif %}
