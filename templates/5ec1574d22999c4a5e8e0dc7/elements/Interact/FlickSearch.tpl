{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}
const flickParams = {
    method: 'flickr.photos.search',
    api_key: '{{ element.values.apikey|default('9dcc79c1af21dcbd961a3161b512f923') }}',
    {% if element.values.hasgeo %}has_geo: true,{% endif %}
    radius: '{{ element.values.radius|default('10') }}km',
    format: 'json',
    extras: 'owner_name,geo,media',
    nojsoncallback: 1
}

axios.get('https://www.flickr.com/services/rest', { params: flickParams }).then((result) => {
    {{ content | raw }}
})
