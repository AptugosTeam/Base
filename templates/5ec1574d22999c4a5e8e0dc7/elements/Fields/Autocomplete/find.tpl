/*
path: find.tpl
completePath: elements/Fields/Autocomplete/find.tpl
unique_id: t9Bzg4Oy
*/
{% set currentFieldData = field | fieldData %}
{% set reference = field.reference | fieldData %}
{% if reference.table.subtype == 'Aptugo' %}
  {% set population = false %}
  {% set subpopulation = [] %}
  {% for everyField in builder.plainFields %}
    {% if everyField.reference %}
      {% set everyFieldRelationshipData = everyField.reference | fieldData %}
      {% if everyFieldRelationshipData.table.unique_id != reference.table.unique_id and everyFieldRelationshipData.table.unique_id != currentFieldData.table.unique_id %}
        {% set subpopulation = subpopulation|merge(["{ model: '" ~ everyFieldRelationshipData.table.name | friendly ~ "', path: '" ~ everyField.column_name | friendly ~ "' }"]) %}
        {% set population = true %}
      {% endif %}
    {% endif %}
  {% endfor %}
  .populate(query.populate === 'true' && { 
    strictPopulate: false,
    model: '{{ reference.table.name | friendly }}',
    path: '{{ field.column_name }}'
    {% if population %}
    , populate: [
      {% for sub in subpopulation %}
        {{ sub }},
      {% endfor %}
    ]
    {% endif %}
  })
{% endif %}