{% set bpr %}
import Grid from '@material-ui/core/Grid'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Grid
  {% if element.values.justify %}justify="{{ element.values.justify }}"{% endif %}
  {% if element.values.align %}alignItems="{{ element.values.align }}"{% endif %}
  {% if element.values.container %}container{% else %}
    item
  {% if element.values.smallcolumns %}xs={ {{ element.values.smallcolumns }} }{% endif %}
  {% if element.values.midcolumns %}md={ {{ element.values.midcolumns }} }{% endif %}
  {% endif %}
  {% if element.values.spacing %}spacing={ {{ element.values.spacing }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>
{{ content | raw }}
</Grid>
