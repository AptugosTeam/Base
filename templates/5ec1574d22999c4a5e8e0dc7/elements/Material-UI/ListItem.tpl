{% set bpr %}
import ListItem from '@material-ui/core/ListItem'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<ListItem
  {% if element.values.dense %}dense{% endif %}
  {% if element.values.disableGutters %}disableGutters={true}{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
  {% if element.values.onClick %}disableRipple button onClickCapture={ {{ element.values.onClick }} } {% endif %}
  {% if element.values.selected %}selected={{ element.values.selected | textOrVariable }}{% endif %}
>
{{ content | raw }}
</ListItem>