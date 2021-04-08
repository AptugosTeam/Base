/*
path: Form.tpl
type: file
unique_id: pepAmzRk
icon: file.svg
options:
  - name: action
    display: route
    type: text
    options: ''
*/
<form
  method="POST"
  action="http://localhost:4567{{element.values.action}}"
>
<input type="hidden" name="token" value="5ff714646dcece84a0c222d3" />
{{ content | raw }}
<input type="submit" name="form"/>
</form>