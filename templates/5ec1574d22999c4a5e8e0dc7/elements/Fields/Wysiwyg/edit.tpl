{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<ReactQuill theme="snow" value={ {{ tableName }}data.{{ field.column_name | friendly }}} onChange={handle{{ tableName }}Change('{{ field.column_name | friendly }}')}/>
