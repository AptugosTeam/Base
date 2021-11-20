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
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: style
    display: Extra Styles
    type: text
    options: ''
  - name: target
    display: Link Target
    type: dropdown
    options: _self;_blank;_parent;_top
sourceType: javascript
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
  {{ content | raw }}
</Link>