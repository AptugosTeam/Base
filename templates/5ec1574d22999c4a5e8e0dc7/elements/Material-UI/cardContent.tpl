{% set bpr %}
import CardContent from '@material-ui/core/CardContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<CardContent>
{{ content | raw }}
</CardContent>