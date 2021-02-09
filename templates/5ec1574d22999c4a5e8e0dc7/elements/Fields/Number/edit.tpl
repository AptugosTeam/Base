{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import TextField from '@material-ui/core/TextField'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    label="{{ field.prompt|default(field.column_name) }}"
    {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
    type="text"
    value={ {{ tableName }}data.{{ field.column_name | friendly }} || ''}
    fullWidth
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
/>
