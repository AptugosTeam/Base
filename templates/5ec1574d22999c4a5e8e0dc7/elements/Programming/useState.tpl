/*
path: useState.tpl
type: file
unique_id: cHWAkFVW
icon: ico-use-state
options:
  - name: variableName
    display: Variable Name
    type: text
    options: ''
  - name: defaultValue
    display: Default Value
    type: text
    options: ''
children: []
*/

{% set ph %}
const [{{ element.values.variableName }}, set{{ element.values.variableName }}] = React.useState<any>({{ element.values.defaultValue }})
{% endset %}
{{ save_delayed('ph',ph,1) }}