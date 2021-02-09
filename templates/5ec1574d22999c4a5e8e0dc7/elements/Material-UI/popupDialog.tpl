{% set bpr %}
import Dialog from '@material-ui/core/Dialog'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Dialog open={ {{ element.values.open }} } onClose={ {{ element.values.onclose }}}>
{{ content | raw }}
</Dialog>
