{% set bpr %}
import Field from '../components/Table/Field'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Field value={(fieldData: any) => '<a href="/img/' + fieldData.{{ field.column_name | friendly }} + '" download>' + fieldData.{{ field.column_name | friendly }} + '</a>'}/>