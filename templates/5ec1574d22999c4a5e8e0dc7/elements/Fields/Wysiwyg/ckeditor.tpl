/*
path: ckeditor.tpl
type: file
unique_id: uarZVa9w
icon: file.svg
internalUse: true
children: []
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<FormControl margin="dense" fullWidth>
    <CKEditor
        editor={ BalloonEditor }
        data={ {{ tableName | friendly }}data.{{ field.column_name | friendly }} }
        onChange={ ( event, editor ) => handle{{ tableName | friendly }}Change('{{ field.column_name | friendly }}')(editor.getData()) }
    />
</FormControl>