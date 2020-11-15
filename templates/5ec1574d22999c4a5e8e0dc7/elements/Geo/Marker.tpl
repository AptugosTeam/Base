{% set bpr %}
import { Marker } from '../components/LeafLet'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Marker position={ {{ element.values.Position|default('leafLetPosition') }}}>
{{ content | raw }}
</Marker>