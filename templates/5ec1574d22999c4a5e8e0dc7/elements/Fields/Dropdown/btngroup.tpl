/*
path: btngroup.tpl
type: file
unique_id: dKPTPUtZ
icon: ico-field
sourceType: javascript
children: []
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import ButtonGroup from '@material-ui/core/ButtonGroup'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<ButtonGroup color="primary" aria-label="outlined primary button group">
{% for item in field.options|split(';') %}
  <Button
    disableElevation
    variant={ {{ tableName }}data.{{ field.column_name | friendly }} === '{{ item }}' ? 'contained':'outlined'} 
    key="{{ item }}"
    value="{{ item }}"
    onClickCapture={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
  >{{ item }}</Button>
{% endfor %}
</ButtonGroup>
