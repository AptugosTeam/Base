/*
path: text.tpl
type: file
unique_id: gBDZLTD1
icon: ico-text
helpText: >-
  Insert simple text anywhere. Can hold variables, code, and anything of your
  choice
sourceType: javascript
options:
  - name: Content
    display: Content
    type: text
    options: ''
  - name: ClassName
    display: ClassName
    type: text
    options: ''
children: []
*/
{% set bpr %}
import { Text } from 'react-native'
{% endset %}
{{ save_delayed('bpr',bpr)}}
<Text {% if element.values.ClassName %}style={ {{ element.values.ClassName }} }{% endif %}>{{ element.values.Content | raw }}{{ content | raw }}</Text>