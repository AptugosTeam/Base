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
  - name: threeway
    display: Use a 3 states checkbox
    type: checkbox
sourceType: javascript
children: []
*/

{% if (element.values.threeway) %}
  {% set compo = 'ThreeCheckbox' %}
  {% set bpr %}
    import ThreeCheckbox from '../components/ThreeCheckbox'
  {% endset %}
{% else %}
  {% set compo = 'Checkbox' %}
  {% set bpr %}
    import Checkbox from '@material-ui/core/Checkbox'
  {% endset %}
{% endif %}
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
<{{ compo }}
    checked={ {{ element.values.Checked }} }
    {% if element.values.OnClick and compo == 'Checkbox' %}onClickCapture={{ element.values.OnClick }}{% endif %}
    {% if element.values.OnClick and compo == 'ThreeCheckbox' %}onChange={{ element.values.OnClick }}{% endif %}
/>
{% if element.values.label %}
  }
  label={{ element.values.label|textOrVariable }}
/>
</FormControl>
{% endif %}
