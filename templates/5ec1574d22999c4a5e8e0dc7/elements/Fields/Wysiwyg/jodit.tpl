/*
path: jodit.tpl
type: file
unique_id: Sb6hcLxZ
icon: ico-field
children: []
settings:
  - name: Packages
    value: >-
      "jodit-react": "latest",
*/
{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set bpr %}
import JoditEditor from "jodit-react"
{% endset %}
{{ save_delayed('bpr', bpr) }}
<FormControl margin="dense" fullWidth>
  <JoditEditor
    value={ {{ tableName | friendly }}data.{{ field.column_name | friendly }} }
    config={ {
      toolbar: false,
      inline: true,
      toolbarInlineForSelection: true,
      popup: {
        selection: ["bold","underline","italic","ul","ol","outdent","indent","fontsize","brush","cut","paragraph","link","align","dots"]
      },
      spellcheck: false,
      enableDragAndDropFileToEditor: true,
      uploader: {
        insertImageAsBase64URI: true
      }
	  } }
    tabIndex={1} // tabIndex of textarea
    onChange={ (newdata) => handle{{ tableName | friendly }}Change('{{ field.column_name | friendly }}')(newdata) }
  />
</FormControl>