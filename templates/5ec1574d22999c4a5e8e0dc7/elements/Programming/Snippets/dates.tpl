/*
path: dates.tpl
type: file
unique_id: dates1eNV
icon: ico-paper
sourceType: javascript
helpText: Converts date strings into usable dates
options:
  - name: variable
    display: Source Variable
    type: variable
    options: ''  
children: []
*/
new Date({{ element.values.variable | textOrVariable }}).getHours()
