/*
path: useState.tpl
completePath: elements/Programming/useState.tpl
type: file
unique_id: cHWAkFVW
icon: ico-use-state
options:
  - name: variableName
    display: Variable Name
    type: text
    options: ''
    settings:
      aptugoOnLoad: >-
        const element = arguments[0];
        const page = aptugo.pageUtils.findContainerPage(element.unique_id).unique_id;
        if (element.values.variableName) {
          aptugo.variables.setPageVariable(page, element.unique_id, { [element.values.variableName]: element.values ? element.values.defaultValue : null })
          aptugo.variables.setPageFunction(page, 'f' + element.unique_id, `set${element.values.variableName}` )
        }
      aptugoOnChange: >-
        const value = arguments[0];
        const element = arguments[1];
        const page = arguments[2];
        aptugo.variables.setPageVariable(page, element.unique_id, { [value]: element.values ? element.values.defaultValue : null })
        aptugo.variables.setPageFunction(page, 'f' + element.unique_id, `set${element.values.variableName}` )
      active: true
  - name: defaultValue
    display: Default Value
    type: text
    options: ''
    settings:
      aptugoOnChange: >-
        const value = arguments[0];
        const element = arguments[1];
        const page = arguments[2];
        if ( element.values.variableName ) aptugo.variables.setPageVariable(page, element.unique_id, { [element.values.variableName]: value });
      active: true
children: []
*/

{% set ph %}
const [{{ element.values.variableName }}, set{{ element.values.variableName }}] = React.useState<any>({{ element.values.defaultValue }})
{% endset %}
{{ save_delayed('ph',ph,1) }}
