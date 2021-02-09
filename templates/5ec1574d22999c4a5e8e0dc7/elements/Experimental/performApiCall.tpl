{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}
axios.get({{ element.values.url }}).then(result => {
 {{ content | raw }}
})
