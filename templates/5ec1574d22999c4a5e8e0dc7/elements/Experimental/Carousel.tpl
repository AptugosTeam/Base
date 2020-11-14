{% set bpr %}
import Carousel from '../components/Carousel/Carousel'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Carousel
    height='{{ element.values.height }}'
    autoPlay={true}
>
    {{ content | raw }}
</Carousel>