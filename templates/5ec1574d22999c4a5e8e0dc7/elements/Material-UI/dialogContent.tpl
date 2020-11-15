{% set bpr %}
import DialogContent from '@material-ui/core/DialogContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<DialogContent>{{ content | raw }}</DialogContent>