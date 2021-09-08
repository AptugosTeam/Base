/*
path: cardContent.tpl
completePath: elements/Material-UI/Cards/cardContent.tpl
unique_id: M6MWRbz3
*/
{% set bpr %}
import CardContent from '@material-ui/core/CardContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<CardContent>
{{ content | raw }}
</CardContent>