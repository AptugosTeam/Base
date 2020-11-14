{% set bpr %}
import List from '@material-ui/core/List'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<List
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
  {% if element.values.disablePadding %}disablePadding={true}{% endif %}
>
{{ content | raw }}
</List>