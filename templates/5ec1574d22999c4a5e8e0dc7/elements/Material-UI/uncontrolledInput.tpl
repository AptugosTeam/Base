{% set bpr %}
import TextField from '@material-ui/core/TextField'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
    variant="{{ element.values.variant|default('standard') }}"
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.placeholder %}placeholder="{{ element.values.placeholder }}"{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    {% if element.values.label %}label="{{ element.values.label }}"{% endif %}
    type="text"
    fullWidth
    {% if element.values.value %}value={{ element.values.value }}{% endif %}
    {% if element.values.onChange %}onChange={ {{ element.values.onChange }} }{% endif %}
/>
