{% set bpr %}
import { {% if element.values.Responsive %}ResponsiveBar{% else %}Bar{% endif %} } from '@nivo/bar'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.values.Code %}
  {% set indexName = 'indexes' %}
  {% set valuesName = 'values' %}
  {% set ph %}
  {{ element.values.Code | raw }}
  {% endset %}
  {{ save_delayed('ph',ph) }}
{% else %}
  {% set indexBy = element.values.Index|fieldData %}
  {% set values = element.values.Values|fieldData %}
  {% set indexName = indexBy.column_name %}
  {% set valuesName = values.column_name %}
  {% include includeTemplate('loadFromRedux.tpl') with { 'data': indexBy.table.unique_id } %}
  {% set ph %}
  const chartdata = []
  {{ element.values.Variable }}.forEach({{ indexBy.table.singleName | friendly | lower }} => {
    chartdata.push({ 
      {{ indexBy.column_name }}: {{ indexBy.table.singleName | friendly | lower }}.{{ indexBy.column_name }},
      {{ values.column_name }}: {{ indexBy.table.singleName | friendly | lower }}.{{ values.column_name }}
    })  
  })
  {% endset %}
  {{ save_delayed('ph',ph) }}
{% endif %}
<{% if element.values.Responsive %}ResponsiveBar{% else %}Bar{% endif %}
  width={ {{ element.values.Width }} }
  height={ {{ element.values.Height }} }
  colors={ { scheme: '{{ element.values.Scheme }}' } }
  indexBy='{{ indexName }}'
  data={chartdata}
  keys={['{{ valuesName }}']}
        
        margin={ { top: 50, right: 130, bottom: 50, left: 60 } }
        padding={0.3}
        borderColor={ { from: 'color', modifiers: [ [ 'darker', 1.6 ] ] } }
        axisTop={null}
        axisRight={null}
        axisBottom={ {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        } }
        axisLeft={ {
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '{{ element.values.LeftAxisLegend }}',
            legendPosition: 'middle',
            legendOffset: -40
        } }
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={ { from: 'color', modifiers: [ [ 'darker', 1.6 ] ] } }
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />