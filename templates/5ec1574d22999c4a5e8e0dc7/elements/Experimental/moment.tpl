{% set bpr %}
import Moment from 'react-moment'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Moment
  interval={0}
  {% if element.values.fromNow %}fromNow{% endif %}
  {% if element.values.format %}format='{{ element.values.format }}'{% endif%}
>{{ element.values.dateToFormat }}</Moment>