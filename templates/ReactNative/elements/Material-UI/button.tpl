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
sourceType: javascript
children: []
*/
{% set bpr %}
import { Button } from 'react-native'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Button
  title={{ element.values.ButtonText | textOrVariable | default('"Button Title"') }}
  {% if element.values.Action %}onPress={ {{ element.values.Action | functionOrCall }} }{% endif %}
/>