{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import TextField from '@material-ui/core/TextField'
{% endset %}
{{ save_delayed('bpr', bpr) }}
{% set bprB %}
import moment from 'moment'
{% endset %}
{{ save_delayed('bpr', bprB ) }}
<TextField
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    label="{{ field.prompt|default(field.column_name) }}"
    {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
    type="date"
    fullWidth
    InputLabelProps={ { shrink: true } }
    value={ {{ tableName }}data.{{ field.column_name | friendly }}?.slice(0,10) || {% if field.defaultToToday == "1" %}moment().utc().format('YYYY-MM-DD'){% else %}''{% endif %}}
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
/>
