/*
path: Link.tpl
type: file
unique_id: a0bW4rmi
icon: ico-link
helpText: Simple Link that uses React Router
options:
  - name: innerText
    display: Text
    type: text
    options: ''
  - name: destination
    display: Destination
    type: text
    options: ''
children: []
*/
{% set bpr %}
import { Link } from "react-router-native"
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Link
    to={{ element.values.destination|textOrVariable }}
    key='{{ element.unique_id }}'
>
    {% if element.values.innerText %}<Text>{{ element.values.innerText }}</Text>{% endif %}
    {{ content | raw }}
</Link>