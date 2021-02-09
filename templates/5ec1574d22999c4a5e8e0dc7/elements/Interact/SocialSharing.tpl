{% set bpr %}
import { {{ element.values.network }} } from 'react-social-sharing'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<{{ element.values.network }}
  link={{ element.values.link|textOrVariable }}
  {% if element.values.display %} {{ element.values.display }} {% endif %}
  {% if element.values.size %} {{ element.values.size }} {% endif %}
/>