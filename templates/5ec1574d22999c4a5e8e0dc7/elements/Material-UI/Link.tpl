{% set bpr %}
import { NavLink } from 'react-router-dom'
{% endset %}
{{ save_delayed('bpr', bpr ) }}

{% set destination = element.values.destination %}
<NavLink
    to='{{ destination }}'
    key='{{ element.unique_id }}'
>
    {% if element.values.innerText %}{{ element.values.innerText }}{% endif %}
    {{ content | raw }}
</NavLink>