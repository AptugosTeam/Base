/*
path: arrayOperation.tpl
type: file
unique_id: arrayoperation
icon: ico-paper
sourceType: javascript
helpText: Performs different operations in Arrays
options:
  - name: variableName
    display: Array Variable Name
    type: text
    options: ''
  - name: operation
    display: Operation to perform
    type: dropdown
    options: 'Filter matching values'
  - name: helperVariable
    display: Helper Variable
    type: text
    options: ''
children: []
*/
{{ element.values.variableName }} = {{ element.values.variableName }}.filter(function (el) {
  return !{{ element.values.helperVariable }}.includes(el)
})