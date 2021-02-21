/*
path: simpleLink.tpl
type: file
unique_id: BG7vdEr8
icon: ico-link
options:
  - name: destination
    display: Destination
    type: text
    options: ''
  - name: tagToUse
    display: Use Tag
    type: dropdown
    options: NavLink;A
sourceType: javascript
children: []
*/
{% set bpr %}
import { NavLink } from 'react-router-dom'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% if element.values.tagToUse == 'A' %}
<a href={{ element.values.destination | textOrVariable }}>{{ content | raw }}</a>
{% else %}
<NavLink to={{ element.values.destination | textOrVariable }}>
{{ content | raw }}</NavLink>
{% endif %}