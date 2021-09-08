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
const {{ varName }} = useSelector((state: IState) => state.{{ table.name | friendly | lower }})
{% endset %}
{{ save_delayed('ph', ph, 1 ) }}
{% set ph %}
const [{{ table.name | friendly }}loadoptions, set{{ table.name | friendly }}loadoptions] = React.useState<any>({ page: 1, limit: 25, sort: { field: null, method: 'ASC' } })
const perform{{ table.name | friendly }}load = (options) => {
  const searchOrLoad = options.searchString ? search{{ table.name | friendly }} : load{{ table.name | friendly }}
  dispatch(
    searchOrLoad(options)
  )
}
{% endset %}
{{ save_delayed('ph',ph)}}
{% set ph %}
React.useEffect(() => {
  perform{{ table.name | friendly }}load({
    ...{{ table.name | friendly }}loadoptions
    {% if element.values.searchString %}, searchString: {{ element.values.searchString | textOrVariable }}{% endif %}
  })
},[{{ table.name | friendly }}loadoptions])
{% endset %}
{{ save_delayed('ph',ph)}}
{% if element.values.onload %}
React.useEffect(() => {
  if ({{ varName }}.searchingStatus === 'loaded') {
    {{ element.values.onload }}
  }
}, [{{ table.name | friendly | lower }}Data.loadingStatus]))
{% endif %}
