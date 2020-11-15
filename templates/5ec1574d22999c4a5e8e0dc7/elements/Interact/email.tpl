{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import { renderEmail } from 'react-html-email'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
{% if element.values.functionName %}
{% set functionName = element.values.functionName %}
{% else %}
{% set functionName = 'sendEmail' %}
{% endif %}
const {{ functionName }} = (to) => {
    const messageHtml =  renderEmail(<InlineLink {% if element.values.parameters %}parameters={ {{ element.values.parameters }} }{% endif %} />)
    axios({
      method: "POST", 
      url:"{{ settings.apiURL | raw }}/api/sendEmail",
      data: {
        name: 'Gaston (email name) <gaston@aptugo.com>',
        email: to,
        messageHtml: messageHtml,
        subject: {{ element.values.subject | textOrVariable }}
      }
    }).then((response)=>{
      if (response.data.msg === 'success'){
        console.log("Email sent, awesome!");
      } else if(response.data.msg === 'fail'){
        console.log('error', response)
      }
    })
  }
{% endset %}
{{ save_delayed('ph',ph) }}
{{ content | raw }}
