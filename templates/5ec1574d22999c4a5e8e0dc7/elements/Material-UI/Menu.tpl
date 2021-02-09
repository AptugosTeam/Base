{% set bpr %}
import Menu from '@material-ui/core/Menu'
{% endset %}
{{ save_delayed('bpr',bpr)}}
{% set bpr %}
import MenuItem from '@material-ui/core/MenuItem'
{% endset %}
{{ save_delayed('bpr',bpr)}}
<Menu 
  anchorEl={ {{ element.values.anchorElement }} }
  keepMounted
  open={ Boolean({{ element.values.anchorElement }}) }
  onClose={ {{ element.values.onClose }} }
>
{{ content | raw }}
</Menu>