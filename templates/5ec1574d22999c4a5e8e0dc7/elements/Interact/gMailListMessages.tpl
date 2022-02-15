/*
path: gMailListMessages.tpl
type: file
unique_id: qgwpdQL5
icon: ico-email
options:
  - name: filter
    display: Filter
    type: text
    options: ''
  - name: clientId
    display: clientId
    type: text
  - name: apiKey
    display: API key
    type: text
extraFiles:
  - source: 'elements/Interact/Google API/999_gmailservice.js'
    destination: 'front-end/services/gmail.service.js'
*/
{% set bpr %}
import AptugoGmail from '../services/gmail.service'
{% endset %}
{{ save_delayed('bpr',bpr) }}
const getMessages = (filter = null) => {
  {% if element.values.filter %}if (!filter) filter = {{ element.values.filter | textOrVariable }}{% endif %}
  AptugoGmail.listThreads(filter).then( (result) => {
    const promises = result.threads.map((item, index) => {
      return AptugoGmail.getThread(item.id).then(res => { 
        return { ...item, ...res }
      })
    })
    Promise.all(promises).then(res => {
      {{ content | raw }}
    })
  })
}