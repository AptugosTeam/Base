/*
path: navLink.tpl
type: file
unique_id: RDDUIuWL
icon: ico-navlink
sourceType: javascript
options:
  - name: Destination
    display: destination
    type: text
    options: ''
  - name: destination
    display: Destination
    type: text
    options: ''
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: activeClassname
    display: ClassName (active)
    type: text
    options: ''
  - name: linkText
    display: Text
    type: text
    options: ''
children: []
*/
{% set bpr %}
import { NavLink } from 'react-router-dom'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import ListItem from '@material-ui/core/ListItem'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import ListItemText from '@material-ui/core/ListItemText'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<NavLink
    to={{ element.values.destination|textOrVariable }}
    {% if element.values.activeClassName %}className={ {{ element.values.className }} }{% endif %}
    {% if element.values.activeClassName %}activeClassName='{{ element.values.activeClassname }}'{% endif %}
    key='{{ element.unique_id }}'
>
  <ListItem button className={classes.itemLink}>
    <ListItemText>
      {% if element.values.linkText %}{{ element.values.linkText }}{% endif %}
      {{ content | raw }}
    </ListItemText>
  </ListItem>
</NavLink>