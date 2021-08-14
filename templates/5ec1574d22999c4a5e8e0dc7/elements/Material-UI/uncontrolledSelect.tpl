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
  - name: margin
    display: Margin
    type: dropdown
    options: none;normal;dense
  - name: fullwidth
    display: Use full width?
    type: checkbox
    options: none;normal;dense
  - name: className
    display: ClassName
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
    margin='{{ element.values.margin|default("dense") }}'
    {% if element.values.label %}label="{{ element.values.label }}"{% endif %}
    {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
    select
    {% if element.values.fullWidth %}fullWidth{% endif %}
    {% if element.values.value %}value={{ element.values.value }}{% endif %}
    {% if element.values.onChange %}onChange={ {{ element.values.onChange }} }{% endif %}
>
<MenuItem value=""><em>All</em></MenuItem>
{ {{ element.values.options }}.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem> )}
</TextField>
