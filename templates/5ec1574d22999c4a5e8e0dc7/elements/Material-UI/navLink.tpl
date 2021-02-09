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

{% set destination = element.values.destination %}
<NavLink
    to='{{ destination }}'
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