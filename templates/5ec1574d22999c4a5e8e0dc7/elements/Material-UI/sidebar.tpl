{% set bpr %}
import Sidebar from '../components/Sidebar/Sidebar'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Sidebar
    color='{{ element.values.colorSchema }}'
    {% if element.values.handleOpen %}handleDrawerToggle={ {{ element.values.handleOpen }} }{% endif %}
    open={ {{ element.values.open }} }
>
{{ content | raw }}
</Sidebar>