{% set bpr %}
{% if element.values.Type == 'edit' %}
import TextField from '@material-ui/core/TextField'
{% else %}
import Field from '../components/Table/Field'
{% endif %}
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
{% include includeTemplate('FieldseditInclude.tpl') with { 'tableInfo': element.values.Field | fieldData } %}
{% endset %}
{{ save_delayed('ph', ph ) }}
{% if element.values.Field %}
    {% set theField = element.values.Field | fieldData %}
{% else %}
    {% set theField = field %}
{% endif %}
{% if element.values.CutOnNewline %}
    {% set fieldValue = 'data.' ~ theField.column_name  ~ '.substr(0, data.' ~ theField.column_name ~ '.indexOf("\n"))' %}
{% else %}
    {% set fieldValue = theField.column_name %}
{% endif %}
{% if element.values.Type == 'edit' %}
{% include includeTemplate('Fields' ~ theField.data_type ~ 'edit.tpl') with theField %}
{% else %}
{% include includeTemplate('Fields' ~ theField.data_type ~ 'show.tpl') with theField %}
{% endif %}
