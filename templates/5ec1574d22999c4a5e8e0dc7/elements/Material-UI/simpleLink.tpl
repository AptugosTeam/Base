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