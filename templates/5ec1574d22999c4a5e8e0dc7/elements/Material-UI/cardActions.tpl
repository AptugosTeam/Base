{% set bpr %}
import CardActions from '@material-ui/core/CardActions'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<CardActions>
{{ content | raw }}
</CardActions>
