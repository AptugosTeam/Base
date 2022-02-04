/*
path: edit.tpl
completePath: elements/Fields/Password/edit.tpl
unique_id: zlxp4g5o
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import TextField from '@mui/material/TextField'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
    {% if element.values.DisableUnderline %}
        InputProps={ { disableUnderline: true } }
    {% endif %}
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
    margin='{{ element.values.margin|default("dense") }}'
    label="{{ field.prompt|default(field.column_name) }}"
    type="password"
    fullWidth
    variant="{{ element.values.variant|default('standard') }}"
    value={ {{ tableName }}data.{{ field.column_name | friendly }}}
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
/>
