/*
icon: ico-paper
path: Paper.tpl
sourceType: javascript
unique_id: efavXTy7
*/
{% set bpr %}
import Paper from '@mui/material/Paper'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Paper
{% if element.values.elevation %}elevation={ {{ element.values.elevation }} }{% endif %}
{% if element.values.square %}square{% endif %}
{% if element.values.variant %}variant='{{ element.values.variant }}'{% endif %}
{% if element.values.className %}classes={ { root: {{ element.values.className }} } }{% endif %}
>
{{ content | raw }}
</Paper>