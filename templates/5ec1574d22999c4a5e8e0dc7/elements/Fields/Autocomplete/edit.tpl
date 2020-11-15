
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
  if ({{ referencedTable | lower }}Data.loadingStatus !== 'loading') {
    dispatch(search{{ referencedTable }}(typedIn))
  }
}
{% endset %}
{{ save_delayed('ph',ph) }}
{% set ph %}
const [{{ columnName }}Options, set{{ columnName }}Options] = React.useState<{ label: String, value: String }[]>([])
const [{{ columnName }}Value, set{{ columnName }}Value] = React.useState({ label: '', value: '' })
React.useEffect(() => {
    if (!{{ tableName }}data.{{ columnName }} || !{{ tableName }}data.{{ columnName }}.{{ referencedField.column_name | friendly }}) return undefined
    dispatch(search{{ referencedTable }}({{ tableName }}data.{{ columnName }}.{{ referencedField.column_name | friendly }}))
    set{{ columnName }}Value({ label: {{ tableName }}data.{{ columnName }}.{{ referencedField.column_name | friendly }}, value: {{ tableName }}data.{{ columnName }}._id })
  }, [{{ tableName }}data.{{ columnName }}])

React.useEffect(() => {
    let options = {{ referencedTable | lower }}Data.found{{ referencedTable | lower }}.map(({{ referencedField.table.singleName | friendly | lower }}) => { 
        return { label: {{ referencedField.table.singleName | friendly | lower }}.{{ referencedField.column_name | friendly }}, value: {{ referencedField.table.singleName | friendly | lower }}.{{ referencekey }} }
    })
    set{{ columnName }}Options(options)
}, [{{ referencedTable | lower }}Data.found{{ referencedTable | lower }}])

{% endset %}
{{ save_delayed('ph',ph) }}
<Autocomplete
  value={ {{ columnName }}Value }
  onType={ typeInSearch{{ referencedTable }} }
  onChange={(newValue) =>
    handle{{ tableName }}Change('{{ columnName }}')({ _id: newValue.value, {{ referencedField.column_name | friendly }}: newValue.label })
  }
  loading={ {{ referencedTable | lower }}Data.loadingStatus === 'loading' }
  options={ {{ columnName }}Options }
  label="{{ field.column_name }}"
/>
