{% set bpr %}
import AccordionDetails from '@material-ui/core/AccordionDetails'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<AccordionDetails>
{{ content | raw }}
</AccordionDetails>