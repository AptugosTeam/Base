/*
path: loop.tpl
type: file
unique_id: IRpM1eNV
icon: ico-loop
sourceType: javascript
helpText: Allows you to loop a variable and render child elements
options:
  - name: variable
    display: Variable
    type: text
    options: ''
  - name: code
    display: Code
    type: text
    options: ''
children: []
*/
{ {{ element.values.variable }}.map((item,index) => {
{% if element.values.code %}{{ element.values.code }}{% endif %}
    return <React.Fragment key={index}>{{ content | raw }}</React.Fragment>
})}