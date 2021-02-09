{% set bpr %}
import ReactGA from 'react-ga'
{% endset %}
{{ save_delayed('bpr',bpr) }}
ReactGA.event({
  category: "{{ element.values.category }}",
  action: "{{ element.values.action }}",
});
