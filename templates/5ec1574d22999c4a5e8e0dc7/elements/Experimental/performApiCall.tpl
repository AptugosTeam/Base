/*
path: performApiCall.tpl
type: file
unique_id: KWeP9css
icon: ico-api-call
helpText: Performs a call to an api and returns the response
options:
  - name: url
    display: URL
    type: text
    options: ''
sourceType: javascript
children: []
*/

{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}
axios.get({{ element.values.url }}).then(result => {
 {{ content | raw }}
})
