{% set tableName = ( field | fieldData ).table.name | friendly %}
{% set referencedField = field.reference | fieldData %}
{% if field.referencekey %}
{% set referencekey = (field.referencekey  | fieldData).column_name %}
{% else %}
{% set referencekey = '_id' %}
{% endif %}

{% set referencedTable = referencedField.table.name | friendly | capitalize %}
{% set columnName = field.column_name | friendly %}
{% set bpr %}
import { search{{ referencedTable }} } from '../store/actions/{{ referencedTable | lower }}Actions'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import Autocomplete from '../components/Autocomplete'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const {{ referencedTable | lower }}Data = useSelector((state: IState) => state.{{ referencedTable | lower }})
{% endset %}
{{ save_delayed('ph',ph) }}
{% set ph %}

const typeInSearch{{ referencedTable }} = (typedIn) => {
  if ({{ referencedTable | lower }}Data.loadingStatus !== 'loading' && typedIn !== '') {
    dispatch(search{{ referencedTable }}(typedIn))
  }
}
{% endset %}
{{ save_delayed('ph',ph) }}
{% set ph %}
const [{{ columnName }}Options, set{{ columnName }}Options] = React.useState<{ label: String, value: String }[]>([])
const [{{ columnName }}Value, set{{ columnName }}Value] = React.useState(null)
React.useEffect(() => {
    if (!{{ tableName }}data.{{ columnName }}) return undefined
    const asArray = Array.isArray({{ tableName }}data.{{ columnName }}) ? {{ tableName }}data.{{ columnName }} : [{{ tableName }}data.{{ columnName }}]
    set{{ columnName }}Value(
      asArray.map(item => ({ label: item.{{ referencedField.column_name | friendly }}, value: item._id }))
    )
  }, [{{ tableName }}data.{{ columnName }}])

React.useEffect(() => {
    let options:any = {{ referencedTable | lower }}Data.found{{ referencedTable | lower }}.map(({{ referencedField.table.singleName | friendly | lower }}) => { 
        return { label: {{ referencedField.table.singleName | friendly | lower }}.{{ referencedField.column_name | friendly }}, value: {{ referencedField.table.singleName | friendly | lower }}.{{ referencekey }} }
    })
    set{{ columnName }}Options(options)
}, [{{ referencedTable | lower }}Data.found{{ referencedTable | lower }}])

{% endset %}
{{ save_delayed('ph',ph) }}
<Autocomplete
  {% if field.displaytype == 'chips' %}chips{% endif %}
  value={ {{ columnName }}Value }
  onType={ typeInSearch{{ referencedTable }} }
  onChange={(newValue) => handle{{ tableName }}Change('{{ columnName }}')(newValue?.length ? newValue.map(item => ({ _id: item.value !== 'new' ? item.value : null, {{ referencedField.column_name | friendly }}: item.label })) : [])}
  loading={ {{ referencedTable | lower }}Data.loadingStatus === 'loading' }
  {% if field.placeholder %}placeholder="{{ field.placeholder }}"{% endif %}
  options={ {{ columnName }}Options }
  label="{{ field.column_name }}"
/>
