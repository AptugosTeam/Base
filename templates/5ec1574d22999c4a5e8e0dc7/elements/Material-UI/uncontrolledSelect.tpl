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
  - name: showall
    display: Show "All" for empty
    type: checkbox
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
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
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
{% if element.values.showall %}<MenuItem value=""><em>All</em></MenuItem>{% endif %}
{ {{ element.values.options }}.map((item, index) => <MenuItem value={item.value ? item.value : item} key={index}>{item.name ? item.name : item}</MenuItem> )}
</TextField>
