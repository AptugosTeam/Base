/*
path: button.tpl
type: file
unique_id: hdTHQyeA
icon: ico-button
options:
  - name: ButtonText
    display: Button Text
    type: text
    options: ''
    settings:
      default: Button
  - name: Action
    display: Action
    type: text
    options: ''
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: Variant
    display: Variant
    type: dropdown
    options: text;contained;outlined
  - name: Color
    display: Color
    type: dropdown
    options: default;inherit;primary;secondary
    settings:
      default: primary
  - name: disabled
    display: Disabled
    type: checkbox
    options: ''
  - name: fullWidth
    display: Full Width
    type: checkbox
    options: ''
sourceType: javascript
children: []
*/

{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Button 
  {% if element.values.Variant %}variant='{{ element.values.Variant }}'{% endif %}
  {% if element.values.Color %}color='{{ element.values.Color }}'{% endif %}
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
  {% if element.values.fullWidth %}fullWidth{% endif %}
>
  {{ element.values.ButtonText }}{{ content | raw }}
</Button>