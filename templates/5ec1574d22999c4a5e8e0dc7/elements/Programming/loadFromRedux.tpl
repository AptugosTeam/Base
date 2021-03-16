/*
path: loadFromRedux.tpl
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
  - name: variableName
    display: Variable Name
    type: text
    options: ''
  - name: onload
    display: Run code upon loading
    type: text
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
    options: DESC;ASC
  - name: elementsLimit
    display: Limit of Elements
    type: text
    options: ''
children: []
*/
{% if element.values.usePagination %}
  {% set limit = element.values.elementsLimit|default(100) %}
{% else %}
  {% set limit = 5000 %}
{% endif %}
{% if data %}
  {% set table = data | tableData %}
{% else %}
  {% set table = element.values.data | tableData %}
{% endif %}
{% set bpr %}
  import { useDispatch } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { useSelector } from 'react-redux'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { IState } from '../store/reducers/index'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { load{{ table.name | friendly | capitalize }}, search{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
const dispatch = useDispatch()
{% endset %}
{{ save_delayed('ph', ph ) }}
{% set ph %}
{% if element.values.variableName %}
  const {{ element.values.variableName }} = useSelector((state: IState) => state.{{ table.name | friendly | lower }}).{% if element.values.searchString %}found{% endif %}{{ table.name | friendly | lower }}
  {% if element.values.searchString %}
    const {{ element.values.variableName }}searchString = useSelector((state: IState) => state.{{ table.name | friendly | lower }}).searchString
  {% endif %}
{% else %}
  const {{ table.name | friendly | lower }}Data = useSelector((state: IState) => state.{{ table.name | friendly | lower }})
{% endif %}
{% endset %}
{{ save_delayed('ph', ph ) }}
{% set ph %}
  {% if element.values.variableName %}
    const [{{ element.values.variableName }}Loading, set{{ element.values.variableName }}Loading] = React.useState(false)
    React.useEffect(() => {
      {% if element.values.searchString %}
      if ({{ element.values.searchString }}) {
      {% endif %}
      if (!{{ element.values.variableName }}Loading && !{{ element.values.variableName }}.length {% if element.values.searchString %}|| {{ element.values.variableName }}searchString !== {{ element.values.searchString }}{% endif %}) {
        set{{ element.values.variableName }}Loading(true)
        {% if element.values.searchString %}
          dispatch(search{{ table.name | friendly | capitalize }}({
            searchString: {{ element.values.searchString }} || '',
            {% if element.values.fieldToSearch %}searchField: "{{ element.values.fieldToSearch }}",{% endif %}
          }))
        {% else %}
          dispatch(load{{ table.name | friendly | capitalize }}(1, {{ limit }}))
        {% endif %}
      } {% if element.values.onload %} else {
        {{ element.values.onload }}
      }{% endif %}
      {% if element.values.searchString %}
      }
      {% endif %}
    }, [{{ element.values.searchString }}])
  {% else %}
    {% if element.values.searchString %}
      React.useEffect(() => {
        if (
          {{ element.values.searchString }} && (
            {{ table.name | friendly | lower }}Data.searchingStatus === 'notloaded' ||
            {{ table.name | friendly | lower }}Data.searchingStatus === 'failed' ||
            {{ table.name | friendly | lower }}Data.searchString !== {{ element.values.searchString }}
          )
        ) {
          dispatch(search{{ table.name | friendly | capitalize }}({
            searchString: {{ element.values.searchString }} || '',
            {% if element.values.fieldToSearch %}searchField: "{{ element.values.fieldToSearch }}",{% endif %}
            {% if element.values.sortColumn %}sort: {
              field: '{{ element.values.sortColumn }}',
              method: '{{ element.values.sortMethod|default('DESC') }}
            }{% endif %}
          }))
        }
        {% if element.values.onload %}
        else {
          {{ element.values.onload }}
        }
        {% endif %}
      }, [{{ table.name | friendly | lower }}Data.searchingStatus])
    {% else %}
      React.useEffect(() => {
        if (
          {{ table.name | friendly | lower }}Data.loadingStatus === 'notloaded' ||
          {{ table.name | friendly | lower }}Data.loadingStatus === 'failed'
        ) {
          dispatch(load{{ table.name | friendly | capitalize }}(1, {{ limit }}))
        } 
        {% if element.values.onload %}
        else {
          {{ element.values.onload }}
        }
        {% endif %}
      }, [{{ table.name | friendly | lower }}Data.loadingStatus])
    {% endif %}
  {% endif %}
{% endset %}
{{ save_delayed('ph', ph ) }}
