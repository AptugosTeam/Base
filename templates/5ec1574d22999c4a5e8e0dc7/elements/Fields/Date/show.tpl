{% set bpr %}
import Field from '../components/Table/Field'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bprB %}
import moment from 'moment'
{% endset %}
{{ save_delayed('bpr', bprB ) }}
<Field value={(fieldData: any) => moment(fieldData.{{ field.column_name | friendly }}).utc().format("{{field.dateFormat}}")}/>