{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import Checkbox from '@material-ui/core/Checkbox'
{% endset %}
{{ save_delayed('bpr', bpr) }}
{% set bpr %}
import FormControlLabel from '@material-ui/core/FormControlLabel'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<FormControlLabel
    control={<Checkbox 
      checked={ {{ tableName }}data.{{ field.column_name | friendly }} }
      color="primary"
      onChange={(e) => handle{{ tableName }}Change("{{ field.column_name | friendly }}")(e.currentTarget.checked)}
    />}
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    label="{{ field.column_name }}"
/>

