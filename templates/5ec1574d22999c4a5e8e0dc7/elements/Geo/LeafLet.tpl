{% set bpr %}
import LeafLet from '../components/LeafLet'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const [leafLetPosition, setleaftLetPosition] = React.useState([51.505, -0.09])
const LeafLetMap = LeafLet
{% endset %}
{{ save_delayed('ph',ph) }}
<LeafLetMap
    position={leafLetPosition}
>
    {{ content | raw }}
</LeafLetMap>