{% set bpr %}
import { Parallax } from 'react-parallax'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Parallax
    blur={1}
    bgImage='{{element.values.bgImage}}'
    bgImageAlt="the cat"
    strength={500}
>
    {{ content | raw }}
</Parallax>