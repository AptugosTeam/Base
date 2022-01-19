/*
path: navigate.tpl
type: file
unique_id: navigate
icon: ico-autolinking
sourceType: javascript
options:
  - name: to
    display: To
    type: dropdown
    options: return aptugo.pageUtils.getAllPages()
children: []
*/
{% set pageFrom = element.values.to | elementData %}
window.location.href = '{{ pageFrom.path }}'
