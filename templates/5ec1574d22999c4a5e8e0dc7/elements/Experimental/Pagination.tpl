{% set bpr %}
import Pagination from '../components/Pagination'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const [pagination, setPagination] = React.useState({
    itemsPerPage: {{ element.values.itemsPerPage|default(10) }},
    currentPage: {{ element.values.currentPage|default(1) }},
    totalItems: {{ element.values.totalItems|default(0) }}
})

React.useEffect(() => {
  dispatch(load{{ (element.values.table|tableData).name | friendly | capitalize }}(pagination.currentPage))
}, [pagination.currentPage])

{% endset %}
{{ save_delayed('ph',ph) }}

<Pagination
    itemsPerPage={pagination.itemsPerPage}
    currentPage={pagination.currentPage}
    setPage={(page) => { setPagination({ ...pagination, currentPage: page })}}
    totalItems={pagination.totalItems}
/>