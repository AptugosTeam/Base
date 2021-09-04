/*
path: accordionSummary.tpl
completePath: elements/Material-UI/Accordion/accordionSummary.tpl
unique_id: B5K8NuI3
*/
{% set bpr %}
import AccordionSummary from '@material-ui/core/AccordionSummary'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<AccordionSummary
    {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
    expandIcon={<ExpandMoreIcon />}
>
    {{ content | raw }}
</AccordionSummary>