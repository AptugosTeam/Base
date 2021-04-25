/*
path: edit.tpl
type: file
unique_id: q9uSxre7
icon: ico-field
sourceType: javascript
children: []
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
<TextField
    {% if element.values.DisableUnderline %}
        InputProps={ { disableUnderline: true } }
    {% endif %}
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin='{{ element.values.margin|default("dense") }}'
    label="{{ field.prompt|default(field.column_name) }}"
    {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
    type="text"
    fullWidth
    multiline
    variant="{{ element.values.variant|default('standard') }}"
    value={ {{ tableName }}data.{{ field.column_name | friendly }}}
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
/>