/*
path: UploadMultipleImages.tpl
completePath: elements/Experimental/UploadMultipleImages.tpl
type: file
unique_id: AcXumHAq
icon: file.svg
helpText: Allows you to upload multiple image files by selection or drag and drop
options:
  - name: classname
    display: ClassName
    type: text
    options: ''
  - name: onChange
    display: On Change
    type: text
    options: ''
settings:
  - name: Packages
    value: '"react-dropzone": "^11.4.2",'
children: []
*/
{% set bpr %}
import MultipleFileUpload from '../components/MultipleFileUpload'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<MultipleFileUpload
  {% if element.values.classname %}className={ {{ element.values.classname }} }{% endif %}
  {% if element.values.onChange %}onChange={
    (files) => {
      {{ element.values.onChange }}
    }
  }{% endif %}
/>
