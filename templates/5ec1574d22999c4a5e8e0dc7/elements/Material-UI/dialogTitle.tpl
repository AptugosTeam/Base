{% set bpr %}
import DialogTitle from '@material-ui/core/DialogTitle'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<DialogTitle>{{ content | raw }}</DialogTitle>