{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Button 
  {% if element.values.Variant %}variant='{{ element.values.Variant }}'{% endif %}
  {% if element.values.Color %}color='{{ element.values.Color }}'{% endif %}
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>
  {{ element.values.ButtonText }}{{ content | raw }}
</Button>