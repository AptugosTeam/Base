{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import TextField from '@material-ui/core/TextField'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
  {% if element.values.Autofocus %}autoFocus{% endif %}
  {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
  label="{{ field.column_name }}"
  type="datetime-local"
  fullWidth
  value={ {{ tableName }}data.{{ field.column_name | friendly }}?.slice(0,16) || '' }
  onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
  InputLabelProps={ {
    shrink: true,
  } }
/>
