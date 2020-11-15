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
  if (!{{ element.values.variableName }}Loading && !{{ element.values.variableName }}.length {% if element.values.searchString %}|| {{ element.values.variableName }}searchString !== {{ element.values.searchString }}{% endif %}) {
    set{{ element.values.variableName }}Loading(true)
    {% if element.values.searchString %}
      dispatch(search{{ table.name | friendly | capitalize }}({
        searchString: {{ element.values.searchString }} || '',
        {% if element.values.fieldToSearch %}searchField: "{{ element.values.fieldToSearch }}",{% endif %}
      }))
    {% else %}
      dispatch(load{{ table.name | friendly | capitalize }}())
    {% endif %}
  } {% if element.values.onload %} else {
    {{ element.values.onload }}
  }{% endif %}
{% else %}
  {% if element.values.searchString %}
    React.useEffect(() => {
      if (
        {{ table.name | friendly | lower }}Data.searchingStatus === 'notloaded' ||
        {{ table.name | friendly | lower }}Data.searchingStatus === 'failed' ||
        {{ table.name | friendly | lower }}Data.searchString !== {{ element.values.searchString }}
      ) {
        dispatch(search{{ table.name | friendly | capitalize }}({
          searchString: {{ element.values.searchString }} || '',
          {% if element.values.fieldToSearch %}searchField: "{{ element.values.fieldToSearch }}",{% endif %}
        }))
      }
      {% if element.values.onload %} else {
      {{ element.values.onload }}
      }{% endif %}
    }, [{{ table.name | friendly | lower }}Data.searchingStatus])
  {% else %}
    React.useEffect(() => {
      if (
        {{ table.name | friendly | lower }}Data.loadingStatus === 'notloaded' ||
        {{ table.name | friendly | lower }}Data.loadingStatus === 'failed'
      ) {
        dispatch(load{{ table.name | friendly | capitalize }}())
      } 
      {% if element.values.onload %} else {
      {{ element.values.onload }}
      }{% endif %}
    }, [{{ table.name | friendly | lower }}Data.loadingStatus])
  {% endif %}
{% endif %}
{% endset %}
{{ save_delayed('ph', ph ) }}
