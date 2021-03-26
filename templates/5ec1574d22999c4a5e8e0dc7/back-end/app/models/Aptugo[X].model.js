const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
// here
const {{ table.name | friendly }}Schema = mongoose.Schema({
  {% for field in table.fields %}
    {% if field.referencekey %}
      {% if field.referencekey == '_id' %}
        {% set fieldInfo = field | fieldData %}
      {% else %}
        {% set fieldInfo = field.referencekey | fieldData %}
      {% endif %}
    {% else %}
      {% set fieldInfo = field | fieldData %}
      {% if fieldInfo.relationshipType == '1:m' %}
        {% set fieldInfo = fieldInfo|merge({'dataType': '[' ~ fieldInfo.dataType ~ ']'}) %}
      {% endif %}
    {% endif %}
    {% set datatype = fieldInfo.dataType %}
    {{ field.column_name | friendly }}: {{ datatype }},
  {% endfor %}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

{% for relatedField in builder.plainFields %}
  {% if relatedField.reference %}
    {% set relData = relatedField.reference | fieldData %}
    {% if table.unique_id == relData.table.unique_id %}
        {% set foundFieldData = relatedField | fieldData %}
{{ table.name | friendly }}Schema.virtual('{{ foundFieldData.table.name}}Ref', {
    ref: '{{ foundFieldData.table.name}}',
    localField: '_id',
    foreignField: '{{ foundFieldData.column_name }}',
    justOne: false
})
    {% endif %}
  {% endif %}
{% endfor %}

{{ table.name | friendly }}Schema.plugin(mongoosePaginate)
{{ table.name | friendly }}Schema.index(
  {
  {% for field in table.fields %}
    {{ field.column_name | friendly }}: 'text',
  {% endfor %} 
  }
);

module.exports = mongoose.model('{{ table.name | friendly }}', {{ table.name | friendly }}Schema, '{{ table.name | friendly }}')
