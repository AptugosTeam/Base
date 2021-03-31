/*
path: searchField.tpl
type: file
unique_id: i13FZRpA
icon: ico-flick-search
helpText: Adds a search field and performs searches on a specific table when changed
children: []
options:
  - name: table
    display: Table
    type: dropdown
    options: >-
      return [['var','Use a
      variable'],...aptugo.store.getState().application.tables.map(({ unique_id,
      name }) => [unique_id, name])]
*/

{% set table = element.values.table | tableData %}
{% set bpr %}
import { load{{ table.name | friendly | capitalize }}, search{{ table.name | friendly | capitalize }} } from '../store/actions/{{ table.name | friendly | lower }}Actions'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
{% set ph %}
let searchTimeout = null
const searchFor{{ table.name | friendly }} = (event) => {
    if (searchTimeout) clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
        dispatch(search{{ table.name | friendly | capitalize }}({
        searchString: event.target.value,
        page: 1,
        limit: 25,
        sort: {
            field: sortOrder.orderBy,
            method: sortOrder.order.toUpperCase()
        }
        }))
    },500)
}
{% endset %}
{{ save_delayed('ph',ph)}}
{% set searchFieldParams = { element: { values: { onChange: 'searchFor' ~ table.name|friendly, placeholder: 'Search ' ~ table.singleName|friendly ~ '...', variant: 'outlined', margin: 'normal', className: 'theme.extensibleInput' } } } %}
{% include includeTemplate('uncontrolledInput.tpl') with searchFieldParams %}