{% set bpr %}
import Accordion from '@material-ui/core/Accordion'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Accordion
    {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>{{ content | raw }}</Accordion>