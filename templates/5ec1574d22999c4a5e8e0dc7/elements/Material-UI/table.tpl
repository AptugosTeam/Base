{% set table = element.values.table | tableData %}
{% set tableName = table.name | friendly %}
{% set fields = table.fields %}
{% set bpr %}
  import Table from '../components/Table/Table'
  import { add{{ table.name | friendly | capitalize }}, load{{ table.name | friendly | capitalize }}, remove{{ table.singleName | friendly | capitalize }}, edit{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
  import EditIcon from '@material-ui/icons/Edit'
  import DeleteIcon from '@material-ui/icons/Delete'
  import IconButton from '@material-ui/core/IconButton'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% include includeTemplate('loadFromRedux.tpl') with { 'data': element.values.table } %}
{% set tableFields = [] %}
{% if element.children %}
    {% for field in element.children %}
        {% set currentField = field.values.Field | fieldData  %}
        {% set tableFields = tableFields|merge([currentField.column_name]) %}
    {% endfor %}
{% else %}
    {% set fields = table.fields %}
    {% for field in fields %}
        {% set tableFields = tableFields|merge([field.column_name]) %}
    {% endfor %}
{% endif %}

<Table
    title='{{ element.values.title }}'
    tableHeaderColor='{{ element.values.headerColor }}'
    tableHead={[{% for field in tableFields %}"{{ field }}",{% endfor %}{% if element.values.addProcedure != 'No' %}"Actions"{% endif %}]}
    tableData={({{ table.name | friendly | lower }}Data.{{ table.name | friendly | lower }} as any)}
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
    <IconButton
      aria-label="edit"
      color="primary"
      onClickCapture={(e: any) => { 
        set{{ tableName }}Data(e.element)
        {% if element.values.addProcedure == 'Internal' %}
          setDialogAction('edit')
        {% else %}
          const url = '{{ (element.values.addProcedure | elementData ).path }}'.replace(':id', e.element._id)
          props.history.push(url)
        {% endif %}
        
      }}
    >
      <EditIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label="delete" color="primary" onClickCapture={(e: any) => { dispatch(remove{{ table.singleName | friendly | capitalize }} (e.element)) }}>
        <DeleteIcon fontSize="small" />
    </IconButton>
</div>
{% endif %}
</Table>
