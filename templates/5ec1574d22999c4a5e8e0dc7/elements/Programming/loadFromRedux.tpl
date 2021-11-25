/*
path: loadFromRedux.tpl
display: Load from Database
completePath: elements/Programming/loadFromRedux.tpl
type: file
unique_id: 2uzdPTtK
icon: ico-load-redux
sourceType: javascript
options:
  - name: data
    display: Data
    type: dropdown
    options: >-
      return aptugo.store.getState().application.tables.map(({ unique_id, name
      }) => [unique_id, name])
    settings:
      aptugoOnLoad: |-
        if ( element.values.data ) {
          const varsToAdd = {};
          const element = arguments[0];
          const page = aptugo.pageUtils.findContainerPage(element.unique_id).unique_id;
          const tableInfo = aptugo.store.getState().application.tables.find(table => table.unique_id === element.values.data )
          const tableFields = tableInfo.fields;
          tableFields.forEach(tableField => { varsToAdd[tableField.column_name] = 'String' });
          const finalVarsToAdd = {
            [aptugo.friendly(tableInfo.name).toLowerCase() + 'Data']: {
              loadingStatus: 'String',
              addingStatus: 'String',
              searchingStatus: 'String',
              searchString: 'String',
              totalDocs: 'String',
              [aptugo.friendly(tableInfo.name).toLowerCase()]: { ...varsToAdd },
              ['found' + aptugo.friendly(tableInfo.name).toLowerCase()]: { ...varsToAdd },
              errField: 'String',
              errStatus: 'String',
              errMessage: 'String'
            }
          };
          aptugo.variables.setPageVariable(page, element.unique_id, finalVarsToAdd);
        }
      active: true
  - name: variableName
    display: Variable Name
    type: text
    options: ''
  - name: onload
    display: Run code upon loading
    type: function
    options: ''
  - name: searchString
    display: Search String
    type: text
    options: ''
  - name: fieldToSearch
    display: Field To Search
    type: text
    options: ''
  - name: sortColumn
    display: Sort Column
    type: text
    options: ''
  - name: sortMethod
    display: Sort Method
    type: dropdown
    options: desc;asc
  - name: elementsLimit
    display: Limit of Elements
    type: text
    options: ''
  - name: donotpopulate
    display: Do NOT populate related tables
    type: checkbox
    options: ''
children: []
*/
{% if data %}
  {% set table = data | tableData %}
{% else %}
  {% set table = element.values.data | tableData %}
{% endif %}
{% set varName = element.values.variableName|default(table.name | friendly | lower ~ 'Data') %}
{% set bpr %}
import { load{{ table.name | friendly | capitalize }}, search{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { IState } from '../store/reducers/index'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
  import { useDispatch, useSelector } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const dispatch = useDispatch()
{% endset %}
{{ save_delayed('ph', ph ) }}
{% set ph %}
const {{ table.name | friendly | lower ~ 'Data' }} = useSelector((state: IState) => state.{{ table.name | friendly | lower }})
{% endset %}
{{ save_delayed('ph', ph, 1 ) }}
{% set ph %}
const {{ varName }} = useSelector((state: IState) => state.{{ table.name | friendly | lower }}){% if element.values.variableName %}.{% if element.values.searchString %}found{% endif %}{{ table.name | friendly | lower }}{% endif %}
{% endset %}
{{ save_delayed('ph', ph, 1 ) }}
{% set ph %}
const [{{ table.name | friendly }}loadoptions, set{{ table.name | friendly }}loadoptions] = React.useState<any>({ 
  page: 1,
  populate: {% if element.values.donotpopulate %}false{% else %}true{% endif %},
  limit: {{ element.values.elementsLimit|default(25) }},
  sort: { field: {{ element.values.sortColumn | default('null') }}, method: '{{ element.values.sortMethod | default('DESC') }}' },
  {% if element.values.fieldToSearch %}searchField: {{ element.values.fieldToSearch | textOrVariable }},{% endif %}
})
const perform{{ table.name | friendly }}load = (options) => {
  {% if element.values.searchString %}
    if (options.searchString) {
      dispatch(search{{ table.name | friendly | capitalize }}(options))
    }
  {% else %}
    dispatch(options.searchString ? search{{ table.name | friendly | capitalize }}(options) : load{{ table.name | friendly | capitalize }}(options))
  {% endif %}
}
{% endset %}
{{ save_delayed('ph',ph)}}
{% set ph %}
React.useEffect(() => {
  perform{{ table.name | friendly }}load({
    ...{{ table.name | friendly }}loadoptions
    {% if element.values.fieldToSearch %}, searchField: {{ element.values.fieldToSearch | textOrVariable }}{% endif %}
    {% if element.values.searchString %}, searchString: {{ element.values.searchString }}{% endif %}
  })
},[{{ table.name | friendly }}loadoptions{% if element.values.searchString %}, {{ element.values.searchString }}{% endif %}])
{% endset %}
{{ save_delayed('ph',ph)}}
{% if element.values.onload %}
{% if element.values.searchString %}
  {% set functionCall = 'searchingStatus' %}
{% else %}
  {% set functionCall = 'loadingStatus' %}
{% endif %}
React.useEffect(() => {
  if ({{ table.name | friendly | lower }}Data.{{ functionCall }} === 'loaded') {
    {{ element.values.onload }}
  }
}, [{{ table.name | friendly | lower }}Data.{{ functionCall }}])
{% endif %}

