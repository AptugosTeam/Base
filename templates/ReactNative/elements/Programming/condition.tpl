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
  - name: usefragment
    display: Do Not Use Fragment
    type: checkbox
    options: ''
helpText: Make a decision based on a value
children: []
*/

{ {{ element.values.condition }} &&
{% if not element.values.usefragment %}<React.Fragment>{% endif %}
{{ content | raw }}
{% if not element.values.usefragment %}</React.Fragment>{% endif %}
}