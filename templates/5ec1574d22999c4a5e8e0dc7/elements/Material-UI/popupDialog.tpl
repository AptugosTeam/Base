/*
path: popupDialog.tpl
type: file
unique_id: Rm5aRBZI
icon: ico-pop-up-dialog
options:
  - name: open
    display: Open Variable
    type: text
    options: ''
  - name: onclose
    display: On Close
    type: text
    options: ''
sourceType: javascript
childs:
  - name: Title
    element: dialogTitle
  - name: Content
    element: dialogContent
  - name: Actions
    element: dialogActions
children: []
*/
{% set bpr %}
import Dialog from '@material-ui/core/Dialog'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Dialog open={ {{ element.values.open }} } onClose={ {{ element.values.onclose }}}>
{{ content | raw }}
</Dialog>
