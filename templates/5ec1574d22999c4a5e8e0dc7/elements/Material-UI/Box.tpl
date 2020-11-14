{% set bpr %}
import Box from '@material-ui/core/Box'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Box
  {% if element.values.color %}color="{{ element.values.color }}"{% endif %}
  {% if element.values.clone %}clone{% endif %}
>
  {{ content | raw }}
</Box>