{% set bpr %}
import MUICookieConsent from 'material-ui-cookie-consent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<MUICookieConsent 
  cookieName="{{ element.values.cookieName }}"
  componentType="{{ element.values.component }}"
  message="{{ element.values.message }}"
/>