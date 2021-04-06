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
    options: Send;AllInbox;Menu;DeleteOutline;Favorite;Clear;Google;Facebook;Twitter
sourceType: javascript
children: []
*/

{% set bpr %}
import IconButton from '@material-ui/core/IconButton'
import {{element.values.icon}}Icon from '@material-ui/icons/{{element.values.icon}}'
{% endset %}
{{ save_delayed('bpr', bpr ) }}

<IconButton
  {% if element.values.Action %}onClickCapture={ {{ element.values.Action }} }{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}
>
  {% if element.values.icon %}<{{element.values.icon}}Icon />{% endif %}
  {{ content | raw }}
</IconButton>