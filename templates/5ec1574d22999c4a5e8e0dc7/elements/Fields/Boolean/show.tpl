/*
path: show.tpl
completePath: elements/Fields/Boolean/show.tpl
unique_id: RdoOPpQT
*/
{% set bpr %}
import Field from '../components/Table/Field'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
export { RadioButtonUncheckedIcon }
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Field value={(fieldData: any) => fieldData.{{ field.column_name | friendly }} ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon /> }/>

