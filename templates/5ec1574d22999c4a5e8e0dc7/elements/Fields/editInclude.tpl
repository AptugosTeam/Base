{% set bpr %}
import { useDispatch } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set eifields = tableInfo.table.fields %}
{% set ph %}
const initialData{{ tableInfo.table.name | friendly }} = {
{% for field in eifields %}
  {% set fieldValue = "''" %}
  {% if (field | fieldData).initialValue %}
    {% set fieldValue = (field | fieldData).initialValue %}
  {% endif %}
  {% if (field | fieldData).reference %}
    {% set referencedField = (field | fieldData).reference | fieldData %}
    {% set fieldValue = "{ _id: '', " ~ referencedField.column_name ~": '' }" %}
  {% endif %}
  {{ field.column_name | friendly }}: {{ fieldValue }},
{% endfor %}
}

const [{{ tableInfo.table.name | friendly }}data, set{{ tableInfo.table.name | friendly }}Data] = React.useState(initialData{{ tableInfo.table.name | friendly }})
const handle{{ tableInfo.table.name | friendly }}Change = (name: string) => (event: any) => {
    const value = event.target ? (event.target.files ? event.target.files[0] : event.currentTarget.value || event.target.value) : event
    set{{ tableInfo.table.name | friendly }}Data({
      ...{{ tableInfo.table.name | friendly }}data,
      [name]: value
    })
  }
{% endset %}
{{ save_delayed('ph', ph, 1 ) }}