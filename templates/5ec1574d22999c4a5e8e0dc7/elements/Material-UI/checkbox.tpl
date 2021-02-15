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
sourceType: javascript
children: []
*/
{% set bpr %}
import Checkbox from '@material-ui/core/Checkbox'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Checkbox
    edge="start"
    checked={ {{ element.values.Checked }} }
    {% if element.values.OnClick %}onClickCapture={{ element.values.OnClick }}{% endif %}
    tabIndex={-1}
    disableRipple
/>