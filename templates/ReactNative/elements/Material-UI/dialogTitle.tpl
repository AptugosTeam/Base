/*
path: dialogTitle.tpl
completePath: elements/Material-UI/dialogTitle.tpl
unique_id: 4lluC3o0
*/
{% set bpr %}
import DialogTitle from '@mui/material/DialogTitle'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<DialogTitle>{{ content | raw }}</DialogTitle>