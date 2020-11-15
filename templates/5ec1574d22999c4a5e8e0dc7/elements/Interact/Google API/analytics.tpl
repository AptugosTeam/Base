{% set bpr %}
import axios from 'axios'
{% endset %}
{{ save_delayed('bpr',bpr) }}

const [{{ element.values.stateName }}, set{{ element.values.stateName }}] = React.useState(null)
React.useEffect(() => {
  axios.post(`${process.env.APIURL}{{ element.values.endpoint }}`,
  {
    dateFrom: '{{ element.values.dateFrom }}',
    dateTo: '{{ element.values.dateTo }}'
  }).then(res => {
    set{{ element.values.stateName }}(res.data.reports)
  })
},[])

