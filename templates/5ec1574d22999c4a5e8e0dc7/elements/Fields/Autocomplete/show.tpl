{% set referencedField = field.reference | fieldData %}
{% set referencedString = 'fieldData.' ~  (field.column_name | friendly)  %}
{% if referencedField.table.subtype == 'Aptugo' %}
    {% set referencedString = referencedString ~ '.' ~ (referencedField.column_name | friendly) %}
{% endif %}
{% set bpr %}
import Field from '../components/Table/Field'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Field value={(fieldData: any) => {{ 'fieldData.' ~  (field.column_name | friendly) }} ? {{ referencedString }} : '' }/>