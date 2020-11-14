{% set bpr %}
import { ResponsivePie } from '@nivo/pie'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.values.Code %}
  {% set ph %}
    {{ element.values.Code | raw }}
  {% endset %}
  {{ save_delayed('ph',ph) }}
{% endif %}
<ResponsivePie
  data={ {{ element.values.variableName }} }
  margin={ { top: 40, right: 80, bottom: 80, left: 80 } }
  colors={ { scheme: '{{ element.values.Scheme }}' } }
/>
