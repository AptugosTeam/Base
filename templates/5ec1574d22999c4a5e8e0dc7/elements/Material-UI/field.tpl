/*
path: field.tpl
type: file
unique_id: aqUmk84z
icon: ico-field
sourceType: javascript
options:
  - name: Field
    display: Field
    type: dropdown
    options: return aptugo.tableUtils.getAllFields()
  - name: Type
    display: Type
    type: dropdown
    options: show;edit
  - name: Cut
    display: Cut after (n) chars
    type: text
    options: ''
  - name: CutOnNewline
    display: Cut on new line
    type: checkbox
    options: ''
  - name: Autofocus
    display: Auto Focus
    type: checkbox
    options: ''
  - name: DisableVariable
    display: Disable Variable
    type: text
    options: ''
  - name: DisableUnderline
    display: Disable Underline
    type: checkbox
    options: ''
  - name: margin
    display: margin
    type: dropdown
    options: dense;normal;none
children: []
*/
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
