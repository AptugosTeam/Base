{% set bpr %}
import Field from '../components/Table/Field'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Field value={(fieldData: any) => fieldData.{{ field.column_name | friendly }} ? <img src={`/img/${fieldData.{{ field.column_name | friendly }}}`} /> : <div />} />
