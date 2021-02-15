{% set bpr %}
import Card from '@material-ui/core/Card'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Card
  {% if element.values.elevation %}elevation={ {{ element.values.elevation }} }{% endif %}
>
  {{ content | raw }}
</Card>