/*
path: IconButton.tpl
type: file
unique_id: JgKwuk06
icon: ico-icon-button
options:
  - name: Action
    display: Action
    type: text
    options: ''
  - name: className
    display: ClassName
    type: text
    options: ''
  - name: icon
    display: Icon
    type: dropdown
    options: >-
      None;Add;CallMade;HelpOutline;Home;Link;MoreVert;Send;AllInbox;Menu;DeleteOutline;Favorite;Clear;Google;Facebook;Twitter;Person;ThumbUp
sourceType: javascript
children: []
*/


{% set bpr %}
import IconButton from '@mui/material/IconButton'
import {{element.values.icon}}Icon from '@mui/icons-material/{{element.values.icon}}'
{% endset %}
{{ save_delayed('bpr', bpr ) }}

<IconButton
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>
  {% if element.values.icon %}<{{element.values.icon}}Icon />{% endif %}
  {{ content | raw }}
</IconButton>