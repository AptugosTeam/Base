/*
path: condition.tpl
type: file
unique_id: zT1b8lbX
icon: ico-condition
sourceType: javascript
options:
  - name: condition
    display: Condition
    type: text
    options: ''
helpText: Make a decision based on a value
children: []
*/
{ {{ element.values.condition }} &&
<React.Fragment>
{{ content | raw }}
</React.Fragment>
}