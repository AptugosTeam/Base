/*
path: table.tpl
type: file
unique_id: IUyfyTiR
icon: ico-table
sourceType: javascript
options:
  - name: title
    display: Title
    type: text
    options: ''
  - name: addProcedure
    display: Add Records
    type: dropdown
    options: >-
      return [['No','None'],['Internal','Popup
      Dialog'],...aptugo.pageUtils.plainpages.map(({unique_id, name }) =>
      [unique_id, name])]
  - name: table
    display: Table
    type: dropdown
    options: >-
      return [['var','Use a
      variable'],...aptugo.store.getState().application.tables.map(({ unique_id,
      name }) => [unique_id, name])]
  - name: detailsURL
    display: Details Page
    type: dropdown
    options: >-
      return [['No','None'],['Internal','Popup
      Dialog'],...aptugo.pageUtils.plainpages.map(({unique_id, name }) =>
      [unique_id, name])]
  - name: allowEdit
    display: Allow Edition
    type: checkbox
    settings:
      default: '''true'''
      condition: ''
  - name: addTitle
    display: Title for Add procedure
    type: text
    options: ''
  - name: addText
    display: Text for Add procedure
    type: text
    options: ''
  - name: headerColor
    display: Header Color
    type: dropdown
    options: warning;primary;danger;success;info;rose;gray
  - name: searchString
    display: Search String
    type: text
    options: ''
  - name: variableToUse
    display: Variable to use
    type: text
    options: ''
    settings:
      condition: var
      propertyCondition: table
  - name: usePagination
    display: Use Pagination
    type: checkbox
    options: ''
    settings:
      default: 'true'
  - name: elementsLimit
    display: Elements Per Page
    type: text
    options: ''
    settings:
      default: '10'
      propertyCondition: usePagination
      condition: '"true"'
      active: true
children: []
*/
{% set tableFields = [] %}
{% if element.values.table == 'var' %}
  {% for field in element.children %}
    {% if field.values.Field == 'useVar' %}
      {% set tableFields = tableFields|merge([field.values.columnName]) %}
    {% else %}
      {% set currentField = field.values.Field | fieldData  %}
      {% set tableFields = tableFields|merge([currentField.column_name]) %}
    {% endif %}
  {% endfor %}
  {% set tableData = element.values.variableToUse %}
{% else %}
  {% set table = element.values.table | tableData %}
  {% set tableName = table.name | friendly %}
  {% set tableSingleName = table.singleName | friendly | capitalize %}
  {% set setEditDataFunctionName = 'set' ~ tableName ~ 'Data' %}
  {% set fields = table.fields %}

  {% include includeTemplate('loadFromRedux.tpl') with { 'data': element.values.table, 'element': element} %}

  {% if element.children %}
      {% for field in element.children %}
        {% if field.values.Field == 'useVar' %}
          {% set tableFields = tableFields|merge([field.values.columnName]) %}
        {% else %}
          {% set currentField = field.values.Field | fieldData  %}
          {% set tableFields = tableFields|merge([currentField.displaylabel|default(currentField.column_name)]) %}
        {% endif %}
      {% endfor %}
  {% else %}
      {% set fields = table.fields %}
      {% for field in fields %}
          {% set tableFields = tableFields|merge([field.displaylabel|default(field.column_name)]) %}
      {% endfor %}
  {% endif %}

  {% set tableData = '(' ~ table.name|friendly|lower ~ 'Data.found' ~ table.name|friendly|lower ~ '.length ? ' ~ table.name|friendly|lower ~ 'Data.found' ~ table.name|friendly|lower ~ ' : ' ~ table.name|friendly|lower ~ 'Data.' ~ table.name|friendly|lower ~ ' as any)' %}
  {% set bpr %}
  import { add{{ table.name | friendly | capitalize }}, load{{ table.name | friendly | capitalize }}, remove{{ table.singleName | friendly | capitalize }}, edit{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
  {% endset %}
  {{ save_delayed('bpr', bpr ) }}
{% endif %}

{% set bpr %}
  import Table from '../components/Table/Table'
  import EditIcon from '@material-ui/icons/Edit'
  import DeleteIcon from '@material-ui/icons/Delete'
  import IconButton from '@material-ui/core/IconButton'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const [sortOrder, setSortOrder] = React.useState<{ orderBy?: string, order: 'asc' | 'desc' }>({ orderBy: null, order: 'asc'})
{% endset %}
{{ save_delayed('ph',ph)}}
<Table
    title='{{ element.values.title }}'
    tableHeaderColor='{{ element.values.headerColor }}'
    tableHead={[{% for field in tableFields %}"{{ field }}",{% endfor %}{% if element.values.addProcedure != 'No' %}"Actions"{% endif %}]}
    tableData={ {{ tableData }} }
    orderBy={sortOrder.orderBy}
    order={sortOrder.order}
    onRequestSort={(event, property) => { 
      setSortOrder({
        order: sortOrder.orderBy === property ? sortOrder.order === 'asc' ? 'desc' : 'asc' : 'asc',
        orderBy: property 
      })
    }}
>{% if element.children %}
  {{ content | raw }}
{% else %}
{% for field in fields %}
  {% set innerParams = { 'element': { values: { 'Field': field.unique_id } } } %}
  {% include includeTemplate('field.tpl') with innerParams %}
{% endfor %}
{% endif %}
{% if element.values.addProcedure != 'No' %}
<div className={classes.actionsArea}>
    {% if element.values.detailsURL %}
    <IconButton
      aria-label="edit"
      color="primary"
      onClickCapture={(e: any) => { 
        const url = '{{ (element.values.detailsURL | elementData ).path }}'.replace(':id', e.element._id)
        props.history.push(url)
      }}
    >
      <EditIcon fontSize="small" />
    </IconButton>
    {% endif %}
    {% if element.values.allowEdit %}
    <IconButton
      aria-label="edit"
      color="primary"
      onClickCapture={(e: any) => { 
        {% if element.values.addProcedure == 'Internal' %}
          {{ setEditDataFunctionName }}(e.element)
          setDialogAction('edit')
        {% else %}
          const url = '{{ (element.values.addProcedure | elementData ).path }}'.replace(':id', e.element._id)
          props.history.push(url)
        {% endif %}
        
      }}
    >
      <EditIcon fontSize="small" />
    </IconButton>
    {% endif %}
    <IconButton aria-label="delete" color="primary" onClickCapture={(e: any) => { dispatch(remove{{ tableSingleName }} (e.element)) }}>
        <DeleteIcon fontSize="small" />
    </IconButton>
</div>
{% endif %}
</Table>
{% if element.values.usePagination %}
{% set innerParams = { 'element': { 'unique_id': item.unique_id, values: { 'variableToUse': table.name | friendly | lower ~ 'Data', 'table': element.values.table, 'elementsLimit': element.values.elementsLimit, 'totalDocs': element.values.variableToUse.totalDocs } } } %}
{% include includeTemplate('Pagination.tpl') with innerParams %}
{% endif %}
