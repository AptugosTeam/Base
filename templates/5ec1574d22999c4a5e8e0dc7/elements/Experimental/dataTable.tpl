/*
path: dataTable.tpl
type: file
unique_id: dsfjsdfh
icon: ico-api-call
helpText: Data table
sourceType: javascript
children: []
options:
  - name: table
    display: Table
    type: dropdown
    options: >-
      return [['var','Use a variable'],...aptugo.store.getState().application.tables.map(({ unique_id, name }) => [unique_id, name])]
  - name: variableToUse
    display: Variable to use
    type: text
    options: ''
    settings:
      condition: var
      propertyCondition: table
settings:
  - name: Packages
    value: '"react-data-table-component": "latest","styled-components": "latest",'
*/
{% set table = element.values.table | tableData %}
{% set fields = table.fields %}
{% set bpr %}
import DataTable from 'react-data-table-component';
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}

const columns = [
  {% for field in fields %}
    {
      name: '{{ field.column_name }}',
      selector: row => row.title,
    },
  {% endfor %}
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

{% endset %}
{{ save_delayed('ph',ph)}}
<DataTable 
  columns={columns}
  data={data}
/>