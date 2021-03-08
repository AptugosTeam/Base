/*
path: uncontrolledSelect.tpl
type: file
unique_id: KZo70Wel
icon: ico-uncontrolled-select
sourceType: javascript
options:
  - name: label
    display: Label
    type: text
    options: ''
  - name: value
    display: Value
    type: text
    options: ''
  - name: onChange
    display: On Change
    type: text
    options: ''
  - name: options
    display: Options
    type: text
    options: ''
children: []
*/
{% set bpr %}
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    {% if element.values.label %}label="{{ element.values.label }}"{% endif %}
    select
    fullWidth
    {% if element.values.value %}value={{ element.values.value }}{% endif %}
    {% if element.values.onChange %}onChange={ {{ element.values.onChange }} }{% endif %}
>
<MenuItem value=""><em>All</em></MenuItem>
{ {{ element.values.options }}.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem> )}
</TextField>
