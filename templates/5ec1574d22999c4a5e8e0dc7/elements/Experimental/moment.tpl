/*
path: moment.tpl
type: file
unique_id: itDtErc5
icon: ico-moment
options:
  - name: dateToFormat
    display: Date to Format
    type: text
    options: ''
  - name: fromNow
    display: Show From Now
    type: checkbox
    options: ''
  - name: format
    display: Format
    type: text
    options: ''
settings:
  - name: Packages
    value: |-
      "moment": "latest",
      "react-moment": "latest",
sourceType: javascript
children: []
*/
{% set bpr %}
import Moment from 'react-moment'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Moment
  interval={0}
  {% if element.values.fromNow %}fromNow{% endif %}
  {% if element.values.format %}format='{{ element.values.format }}'{% endif%}
>{{ element.values.dateToFormat }}</Moment>