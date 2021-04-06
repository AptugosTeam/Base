{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import FileUpload from '../components/FileUpload/FileUpload'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<FileUpload
    {% if element.values.classname %}className={ {{ element.values.classname }} }{% endif %}
    label="{{ field.prompt|default(field.column_name) }}"
    {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
    value={ {{ tableName }}data.{{ field.column_name | friendly }}}
    onChange={handle{{ tableName }}Change("{{ field.column_name | friendly }}")}
    variant="{{ element.values.variant|default('standard') }}"
/>