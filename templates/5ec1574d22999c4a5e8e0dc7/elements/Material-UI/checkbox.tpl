/*
path: checkbox.tpl
type: file
unique_id: rCl7agO3
icon: ico-check-box
options:
  - name: Checked
    display: Checked Variable
    type: text
    options: ''
  - name: OnClick
    display: OnClick
    type: text
    options: ''
  - name: label
    display: label
    type: text
  - name: margin
    display: margin
    type: dropdown
    options: dense;normal;none
sourceType: javascript
children: []
*/
{% set bpr %}
import Checkbox from '@material-ui/core/Checkbox'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.values.label %}
{% set bpr %}
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<FormControl margin='{{ element.values.margin|default("dense") }}'>
<FormControlLabel control={
{% endif %}
<Checkbox
    checked={ {{ element.values.Checked }} }
    {% if element.values.OnClick %}onClickCapture={{ element.values.OnClick }}{% endif %}
/>
{% if element.values.label %}
  }
  label={{ element.values.label|textOrVariable }}
/>
</FormControl>
{% endif %}
