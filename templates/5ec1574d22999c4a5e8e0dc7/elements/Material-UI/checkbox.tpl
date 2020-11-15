{% set bpr %}
import Checkbox from '@material-ui/core/Checkbox'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Checkbox
    edge="start"
    checked={ {{ element.values.Checked }} }
    {% if element.values.OnClick %}onClickCapture={{ element.values.OnClick }}{% endif %}
    tabIndex={-1}
    disableRipple
/>