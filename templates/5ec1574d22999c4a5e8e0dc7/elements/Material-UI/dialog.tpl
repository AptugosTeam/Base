{% set table = element.values.table | tableData %}
{% if element.children %}
{% else %}
  {% set fields = table.fields %}
{% endif %}
{% set bpr %}
import { I{{ table.name | friendly | capitalize }}Item } from '../store/models'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import TextField from '@material-ui/core/TextField'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { add{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr %}
import { edit{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set bpr2 %}
import AddDialog from '../components/Dialog/Dialog'
{% endset %}
{{ save_delayed('bpr', bpr2 ) }}
{% set ph %}
  const [dialogAction, setDialogAction] = React.useState<'add' | 'edit' | "">('')
  const LocalAddDialog = AddDialog
{% endset %}
{{ save_delayed('ph', ph ) }}
<LocalAddDialog
  {% if element.values.hideButton %}hideButton={true}{% endif %}
  isOpen={dialogAction !== ''}
  onOpen={() => {% if element.values.addProcedure == 'Internal' %}setDialogAction('add'){% else %}props.history.push('{{ (element.values.addProcedure | elementData ).path | withoutVars }}'){% endif %}}
  onClose={() => setDialogAction('')}
  title={dialogAction === 'edit' ? '{{ element.values.editTitle }}' : '{{ element.values.title }}'}
  text={dialogAction === 'edit' ? '{{ element.values.editIntroText }}' : '{{ element.values.introText }}'}
  button={dialogAction === 'edit' ? '{{ element.values.editButton }}' : '{{ element.values.button }}'}
  saveDataHandler={ (data: I{{ table.name | friendly | capitalize }}Item ) => {
    {% if element.values.addProcedure == 'Internal' %}
      dialogAction === 'add' ? dispatch(add{{ table.name | friendly | capitalize }}(data)) : dispatch(edit{{ table.name | friendly | capitalize }}(data))
    {% endif %}
  } }
  color='{{ element.values.color }}'
  data={ {{ table.name | friendly }}data}
  initialData={initialData{{ table.name | friendly }}}
  setData={set{{ table.name | friendly }}Data}
  allowMultipleSubmit={dialogAction === 'add'}
>
{% for field in fields %}
 {% set subvalues = { element: { values: { Field: field.unique_id, Type: 'edit' } }  } %}
 {% include includeTemplate('field.tpl') with subvalues %}
{% endfor %}
</LocalAddDialog>
