/*
path: "{{ table.name |\_friendly |\_lower }}.model.js"
type: file
unique_id: fnd3TqFu
icon: ico-field
modelRelated: true
sourceType: javascript
subtype: Aptugo
children: []
*/

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

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
    {% if datatype %}
    {{ field.column_name | friendly }}: {{ datatype }},
    {% endif %}
  {% endfor %}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

{% for relatedField in builder.plainFields %}
  {% if relatedField.reference %}
    {% set relData = relatedField.reference | fieldData %}
    {% if relatedField.data_type == 'Relationship' and (relatedField | fieldData).table.unique_id == table.unique_id %}
        {{ table.name | friendly }}Schema.add({ {{ relData.table.name }}: [ require('./{{ relData.table.name | lower }}.model.js').schema ] })
    {% else %}
      {% if relatedField.relationshipType != 'm:1' and table.unique_id == relData.table.unique_id %}
        {% set foundFieldData = relatedField | fieldData %}
        {{ table.name | friendly }}Schema.virtual('{{ foundFieldData.table.name | friendly }}', {
          ref: '{{ foundFieldData.table.name | friendly }}',
          localField: '_id',
          foreignField: '{{ foundFieldData.column_name }}',
          justOne: false,
          type: '{{ relData.relationshipType }}'
        })
      {% endif %}
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

const myModel = module.exports = mongoose.model('{{ table.name | friendly }}', {{ table.name | friendly }}Schema, '{{ table.name | friendly | lower }}')
myModel.schema = {{ table.name | friendly }}Schema
