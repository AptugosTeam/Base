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
  - name: method
    display: Method
    type: dropdown
    options: 'get;post;put;delete'
  - name: dataVariable
    display: Data Variable
    type: text
    options: ''
  - name: extraOptions
    display: Extra options
    type: text
sourceType: javascript
children: []
*/

{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}
axios.{{ element.values.method|default('get') }}({{ element.values.url }}{% if element.values.dataVariable %}, {{ element.values.dataVariable }}{% endif %}, {% if element.values.extraOptions %}{{ element.values.extraOptions | raw }}{% endif %}).then(result => {
 {{ content | raw }}
})
