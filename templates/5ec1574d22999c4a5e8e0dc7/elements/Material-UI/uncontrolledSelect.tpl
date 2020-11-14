{% set bpr %}
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TextField
    {% if element.values.Autofocus %}autoFocus{% endif %}
    {% if element.values.DisableVariable %}disabled={ {{ element.values.DisableVariable }} }{% endif %}
    margin="dense"
    {% if element.values.label %}label="{{ element.values.label }}"{% endif %}
    select
    fullWidth
    {% if element.values.value %}value={{ element.values.value }}{% endif %}
    {% if element.values.onChange %}onChange={ {{ element.values.onChange }} }{% endif %}
>
<MenuItem value=""><em>All</em></MenuItem>
{ {{ element.values.options }}.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem> )}
</TextField>
