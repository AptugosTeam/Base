/*
path: dialog.tpl
type: file
unique_id: Lcyk85fH
icon: ico-dialogs
sourceType: javascript
options:
  - name: table
    display: Table
    type: dropdown
    options: >-
      return aptugo.store.getState().application.tables.map(({ unique_id, name
      }) => [unique_id, name])
  - name: title
    display: Title (add)
    type: text
    options: ''
  - name: introText
    display: Intro Text (add)
    type: text
    options: ''
  - name: button
    display: Button Text (add)
    type: text
    options: ''
  - name: editTitle
    display: Title (edit)
    type: text
    options: ''
  - name: editIntroText
    display: Intro Text (edit)
    type: text
    options: ''
  - name: editButton
    display: Button Text (edit)
    type: text
    options: ''
  - name: addProcedure
    display: Add Records
    type: dropdown
    options: >-
      return [['No','None'],['Internal','Popup
      Dialog'],...aptugo.pageUtils.plainpages.map(({unique_id, name }) =>
      [unique_id, name])]
  - name: color
    display: Color
    type: dropdown
    options: primary;inherit;secondary;default
  - name: hideButton
    display: Hide Button
    type: checkbox
    options: ''
  - name: manuallyManaged
    display: Do not auto close
    type: checkbox
    options: ''
children: []
*/

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
  {% if not element.values.manuallyManaged %}
    onSave={() => setDialogAction('')}
  {% endif %}
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
{{ content | raw }}
</LocalAddDialog>
