/*
path: snackbar.tpl
type: file
unique_id: sU8SWeZz
icon: ico-snackbar
options:
  - name: message
    display: Message
    type: text
    options: ''
  - name: autohide
    display: Auto Hide Duration (ms)
    type: text
    options: ''
  - name: position
    display: Position
    type: dropdown
    options: Top-Left;Top-Center;Top-Right;Bottom-Left;Bottom-Center;Bottom-Right
children: []
*/

{% set bpr %}
import Snackbar from '@material-ui/core/Snackbar'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const [snackBarOpen, setSnackbarOpen] = React.useState(false)
{% endset %}
{{ save_delayed('ph', ph ) }}
{% set splited = element.values.position|split('-') %}
<Snackbar
  open={snackBarOpen}
  message="{{ element.values.message }}"
  {% if element.values.autohide %}autoHideDuration={ {{ element.values.autohide }} }{% endif %}
  onClose={() => { setSnackbarOpen(false) } }
  anchorOrigin={ { vertical: '{{splited[0]|lower}}', horizontal: '{{splited[1]|lower}}' } }
/>