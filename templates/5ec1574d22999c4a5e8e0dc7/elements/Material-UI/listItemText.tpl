{% set bpr %}
import ListItemText from '@material-ui/core/ListItemText'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<ListItemText
  primary={{ element.values.text | textOrVariable }}
  {% if element.values.onClick %}onClickCapture={ {{ element.values.onClick }} }{% endif %}
  {% if element.values.className %}classes={ { root: {{ element.values.className }} } }{% endif %}
  {% if element.values.secondaryText %}secondary={{ element.values.secondaryText | textOrVariable }}{% endif %}
/>