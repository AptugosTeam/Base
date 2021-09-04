/*
path: accordionDetails.tpl
completePath: elements/Material-UI/Accordion/accordionDetails.tpl
unique_id: KBm2vQFr
*/
{% set bpr %}
import AccordionDetails from '@material-ui/core/AccordionDetails'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<AccordionDetails>
{{ content | raw }}
</AccordionDetails>