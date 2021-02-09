{% set bpr %}
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<AppBar
    elevation={ {{ element.values.Elevation|default('0') }} }
    {% if element.values.Color %}color='{{ element.values.Color }}'{% endif %}
    {% if element.values.Position %}position='{{ element.values.Position }}'{% endif %}
    title='{{ element.values.Title }}'
>
<Toolbar {% if element.values.ClassName %}className={ {{ element.values.ClassName }} }{% endif %}>
{{ content | raw }}
</Toolbar>
</AppBar>
