{% set bpr %}
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
{% endset %}
{{ save_delayed('bpr', bpr) }}
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<FormControl margin="dense" fullWidth>
  <ReactQuill placeholder="{{ field.placeholder|default(field.prompt)|default(field.column_name) }}" theme="snow" value={ {{ tableName }}data.{{ field.column_name | friendly }}} onChange={handle{{ tableName }}Change('{{ field.column_name | friendly }}')}/>
</FormControl>
