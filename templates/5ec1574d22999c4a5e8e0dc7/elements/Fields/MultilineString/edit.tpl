{% set tableName = ( field | fieldData ).table.name | friendly %}
<TextField
    {% if element.values.DisableUnderline %}
    InputProps={ { disableUnderline: true } }
    {% endif %}
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    label="{{ field.column_name }}"
    type="text"
    fullWidth
    multiline
    value={ {{ tableName }}data.{{ field.column_name | friendly }}}
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
/>