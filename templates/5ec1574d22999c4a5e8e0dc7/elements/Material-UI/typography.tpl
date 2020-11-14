{% set bpr %}
import Typography from '@material-ui/core/Typography'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Typography
  variant="{{ element.values.tag }}"
  {% if element.values.color %}color="{{ element.values.color }}"{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}>
{{ content | raw }}
</Typography>