{% set countries = element.values.Countries|fieldData %}
{% set values = element.values.Values|fieldData %}
{% set bpr %}
import { {% if element.values.Responsive %}ResponsiveChoropleth{% else %}Choropleth{% endif %} } from '@nivo/geo'
import features from '../components/Geo/features.json'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% include includeTemplate('loadFromRedux.tpl') with { 'data': countries.table.unique_id } %}
{% set ph %}

const geodata = []
let geodatamax = null
let geodatamin = null
{{ countries.table.name | friendly | lower }}Data.{{ countries.table.name | friendly | lower }}.forEach({{ countries.table.singleName | friendly | lower }} => {
    const newVal = { 
      id: {{ countries.table.singleName | friendly | lower }}.{{ countries.column_name }},
      value: {{ values.table.singleName | friendly | lower }}.{{ values.column_name }}
    }
    
    if (newVal.value > geodatamax) geodatamax = newVal.value
    if (newVal.value < geodatamin || geodatamin === null) geodatamin = newVal.value
    geodata.push(newVal)  
  })


{% endset %}
{{ save_delayed('ph',ph) }}
<{% if element.values.Responsive %}ResponsiveChoropleth{% else %}Choropleth{% endif %}
  width={ {{ element.values.Width }} }
  height={ {{ element.values.Height }} }
  data={geodata}
  features={features.features}
  margin={ { top: 0, right: 0, bottom: 0, left: 0 } }
  colors="{{ element.values.Scheme }}"
  domain={[ geodatamin, geodatamax ]}
  unknownColor="#666666"
  label="properties.name"
  valueFormat=".2s"
  projectionTranslation={[ 0.5, 0.5 ]}
  projectionRotation={[ 0, 0, 0 ]}
  enableGraticule={true}
  graticuleLineColor="#dddddd"
  borderWidth={0.5}
  borderColor="#152538"
/>
