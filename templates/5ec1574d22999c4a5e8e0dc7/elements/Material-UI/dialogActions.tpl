/*
path: dialogActions.tpl
type: file
unique_id: LRTdiJMk
icon: ico-dialog-actions
children: []
*/
{% set bpr %}
import DialogActions from '@material-ui/core/DialogActions'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<DialogActions>{{ content | raw }}</DialogActions>