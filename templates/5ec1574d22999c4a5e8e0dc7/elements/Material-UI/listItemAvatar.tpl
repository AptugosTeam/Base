/*
path: listItemAvatar.tpl
type: file
unique_id: UiCt6mqz
icon: ico-list-item
sourceType: javascript
children: []
*/
{% set bpr %}
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<ListItemAvatar>
    <Avatar
        src='/img/logo.png'
    />
</ListItemAvatar>