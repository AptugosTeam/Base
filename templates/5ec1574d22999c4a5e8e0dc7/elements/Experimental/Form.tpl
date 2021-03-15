/*
path: Form.tpl
type: file
unique_id: ILcL0HCZ
icon: file.svg
children: []
options:
  - name: method
    display: Method
    type: dropdown
    options: POST;GET
  - name: action
    display: Action
    type: text
    options: ''
*/
<form
  method="{{element.values.method}}"
  action="http://localhost:4567{{element.values.action}}"
>
<input type="hidden" name="token" value="5ff714646dcece84a0c222d3" />
{{ content | raw }}
<input type="submit" name="form"/>
</form>