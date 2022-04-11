/*
path: listItemAvatar.tpl
type: file
unique_id: UiCt6mqz
icon: ico-list-item
sourceType: javascript
children: []
options:
  - name: path
    display: Image Path
    type: text
    options: ''
*/
{% set bpr %}
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<ListItemAvatar>
  <Avatar
    src={{ element.values.path|textOrVariable }}
  />
</ListItemAvatar>