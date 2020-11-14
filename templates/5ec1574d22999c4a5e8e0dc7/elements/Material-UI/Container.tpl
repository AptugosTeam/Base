{% set bpr %}
import Container from '@material-ui/core/Container'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Container
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
  {% if element.values.disableGutters %}disableGutters{% endif %}
  {% if element.values.fixed %}fixed{% endif %}
  {% if element.values.maxWidth %}maxWidth="{{ element.values.maxWidth }}"{% endif %}
>
  {{ content | raw }}
</Container>
