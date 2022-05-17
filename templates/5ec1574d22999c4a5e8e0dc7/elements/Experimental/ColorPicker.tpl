/*
path: ColorPicker.tpl
completePath: elements/Experimental/ColorPicker.tpl
type: file
unique_id: 8fk40l27
icon: ico-field
sourceType: javascript
options:
  - name: class
    display: ClassName
    type: styles
    options: ''
  - name: value
    display: Value
    type: text
    options: ''
  - name: onchange
    display: On Change
    type: function
    options: ''
children: []
helpText: Provides a user interface that lets you specify a color.
*/
<input
  title="{{ element.name }}"
  type="color"
  {% if element.values.value %}value={ {{element.values.value}} }{% endif %}
  {% if element.values.onchange %}onChange={(e) => {{element.values.onchange}} }{% endif %}
  {% if element.values.class %}className={ {{element.values.class}} }{% endif %}
>
{{ content | raw }}
</input>
