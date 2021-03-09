/*
path: chartbar.tpl
type: file
unique_id: I4IK8OXW
icon: ico-chart-bar
helpText: Uses Nivo Charting library to draw a chart
sourceType: javascript
settings:
  - name: Packages
    value: '"@nivo/bar": "latest",'
options:
  - name: Responsive
    display: Responsive
    type: checkbox
    options: ''
  - name: Width
    display: Width
    type: text
    options: ''
  - name: Height
    display: Height
    type: text
    options: ''
  - name: Scheme
    display: Scheme
    type: dropdown
    options: >-
      nivo;category10;accent;dark2;paired;pastel1;pastel2;set1;set2;set3;brown_blueGreen;purpleRed_green;pink_yellowGreen;purple_orange;red_blue;red_grey;red_yellow_blue;red_yellow_green;spectral;blues;greens;greys;oranges;purples;reds;blue_green;blue_purple;green_blue;orange_red;purple_blue_green;purple_blue;purple_red;red_purple;yellow_green_blue;yellow_green;yellow_orange_brown;yellow_orange_red
  - name: Index
    display: Index By
    type: dropdown
    options: return aptugo.tableUtils.getAllFields()
  - name: Vak¡lues
    display: Values
    type: dropdown
    options: return aptugo.tableUtils.getAllFields()
  - name: Values
    display: Values
    type: dropdown
    options: return aptugo.tableUtils.getAllFields()
  - name: LeftAxisLegend
    display: 'Left Axis: Legend'
    type: text
    options: ''
  - name: Variable
    display: Variable to Use
    type: text
    options: return aptugo.tableUtils.getAllFields()
  - name: Code
    display: Use Code instead
    type: text
    options: ''
children: []
*/
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