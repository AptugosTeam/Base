/*
path: div.tpl
type: file
unique_id: y8fra7Zo
icon: 3d.svg
sourceType: javascript
options:
  - name: class
    display: ClassName
    type: text
    options: ''
  - name: useid
    display: Use UniqueID as ID
    type: checkbox
    options: ''
  - name: id
    display: ID
    type: text
    options: ''
children: []
*/
<div
  {% if element.values.useid %}id="{{ element.unique_id }}"{% endif %}
  {% if element.values.id %}id={{ element.values.id | textOrVariable }}{% endif %}
  {% if element.values.class %}className={ {{element.values.class}} }{% endif %}
>
{{ content | raw }}
</div>