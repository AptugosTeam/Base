{% set bpr %}
import Snackbar from '@material-ui/core/Snackbar'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const [snackBarOpen, setSnackbarOpen] = React.useState(false)
{% endset %}
{{ save_delayed('ph', ph ) }}
<Snackbar
  open={snackBarOpen}
  message="{{ element.values.message }}"
/>