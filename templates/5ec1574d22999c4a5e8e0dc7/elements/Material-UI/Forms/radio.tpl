/*
path: radio.tpl
type: file
unique_id: Qeq87CZJ
icon: ico-radio
children: []
options:
  - name: checked
    display: Checked
    type: text
    options: ''
  - name: onchange
    display: On Change
    type: text
    options: ''
  - name: value
    display: Value
    type: text
    options: ''
  - name: name
    display: Name
    type: text
    options: ''
*/
{% set bpr %}
import Radio from '@material-ui/core/Radio'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Radio
    {% if element.values.checked %}checked={{ element.values.checked | textOrVariable }}{% endif %}
    {% if element.values.onchange %}onChange={{ element.values.onchange | textOrVariable }}{% endif %}
    {% if element.values.value %}value={{ element.values.value | textOrVariable }}{% endif %}
    {% if element.values.name %}name={{ element.values.name | textOrVariable }}{% endif %}
/>