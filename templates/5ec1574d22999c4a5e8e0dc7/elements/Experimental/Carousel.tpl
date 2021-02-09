{% set bpr %}
import Carousel from '../components/Carousel/Carousel'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Carousel
    height='{{ element.values.height }}'
    {% if element.values.autoplay %}autoPlay={true}{% else %}autoPlay={false}{% endif %}
    arrowsOrDotsMethod='{{ element.values.arrowsOrDotsMethod }}'
>
    {{ content | raw }}
</Carousel>