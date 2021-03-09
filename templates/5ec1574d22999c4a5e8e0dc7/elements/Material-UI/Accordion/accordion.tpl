{% set bpr %}
import Accordion from '@material-ui/core/Accordion'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Accordion
    {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
    elevation={ {{ element.values.elevation|default(1) }} }
>{{ content | raw }}</Accordion>