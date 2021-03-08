/*
path: emailContent.tpl
type: file
unique_id: 5lG5PAMZ
icon: ico-field
internalUse: true
sourceType: javascript
children: []
*/
{% set bpr %}
import { Email, Item, A } from 'react-html-email'

function InlineLink(emailParameters) {
  return (
  <Email title='link'>
    {{ content | raw }}
  </Email>
)};
{% endset %}
{{ save_delayed('bpr',bpr) }}