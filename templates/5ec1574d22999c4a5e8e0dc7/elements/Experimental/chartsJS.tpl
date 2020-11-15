{% set bpr %}
import { Bar } from 'react-chartjs-2'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<Bar
    data={ {{ element.values.data }}}
    options={ {
        title:{
            display:true,
            text:'{{ element.values.title }}',
            fontSize:20
        },
        legend:{
            display:true,
            position:'bottom'
        }
    } }
/>