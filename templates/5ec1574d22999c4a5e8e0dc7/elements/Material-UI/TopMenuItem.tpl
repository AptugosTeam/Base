/*
path: TopMenuItem.tpl
completePath: elements/Material-UI/TopMenuItem.tpl
unique_id: t8HbLltx
children: []
icon: ico-top-menu-item
options:
  - name: text
    display: Display Text
    type: text
    options: ''
  - name: link
    display: Navigate to
    type: text
    options: ''
*/
<TopMenuItem
    {% if element.values.text %}text={{ element.values.text | textOrVariable}}{% endif %}
    {% if element.values.link %}link={{ element.values.link | textOrVariable }}{% endif %}
>{{ content|raw }}</TopMenuItem>
