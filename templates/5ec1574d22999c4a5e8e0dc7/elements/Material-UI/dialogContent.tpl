/*
path: dialogContent.tpl
type: file
unique_id: WrV2SSGL
icon: ico-dialog-content
sourceType: javascript
children: []
*/
{% set bpr %}
import DialogContent from '@material-ui/core/DialogContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<DialogContent>{{ content | raw }}</DialogContent>