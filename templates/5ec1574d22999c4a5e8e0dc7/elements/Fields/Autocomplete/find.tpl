{% set ref = field.reference | fieldData %}
{% if ref.table.subtype == 'Aptugo' %}
.populate({ model: '{{ ref.table.name | friendly }}', path: '{{ field.column_name }}' })
{% endif %}