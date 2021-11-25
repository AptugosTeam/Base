/*
path: loop.tpl
type: file
unique_id: IRpM1eNV
icon: ico-loop
sourceType: javascript
helpText: Allows you to loop a variable and render child elements
options:
  - name: variable
    display: Source Variable
    type: text
    options: ''
  - name: variablename
    display: Variable name in which each item will be put in
    type: text
    settings:
      default: 'item'
  - name: filtersource
    display: Condition to filter source values
    type: text
    advanced: true
  - name: code
    display: Code
    type: text
    options: ''
  
children: []
*/
{% if element.values.filtersource %}
{% set addExtra = '.filter(tmp => tmp.' ~ element.values.filtersource ~ ')' %}
{% endif %}
{ {{ element.values.variable }}{{ addExtra }}.map(({{ element.values.variablename | default('item') }},index) => {
{% if element.values.code %}{{ element.values.code }}{% endif %}
    return <React.Fragment key={index}>{{ content | raw }}</React.Fragment>
})}