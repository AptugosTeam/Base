/*
path: edit.tpl
type: file
unique_id: pcy5ZgWy
icon: ico-field
sourceType: javascript
children: []
settings:
  - name: Packages
    value: |-
      "moment": "latest",
      "react-moment": "latest",
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import TextField from '@mui/material/TextField'
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
    error={ {{ tableName | lower }}Data?.errField === '{{ field.column_name | friendly }}'}
    helperText={ {{ tableName | lower }}Data?.errField === '{{ field.column_name | friendly }}' && {{ tableName | lower }}Data.errMessage}
/>
