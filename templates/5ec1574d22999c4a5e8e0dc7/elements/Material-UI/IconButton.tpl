{% set bpr %}
import IconButton from '@material-ui/core/IconButton'
import {{element.values.icon}}Icon from '@material-ui/icons/{{element.values.icon}}'
{% endset %}
{{ save_delayed('bpr', bpr ) }}

<IconButton
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>
  <{{element.values.icon}}Icon />
</IconButton>