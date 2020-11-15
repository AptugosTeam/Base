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
{% endset %}
{{ save_delayed('ph',ph) }}
<Pagination
    itemsPerPage={pagination.itemsPerPage}
    currentPage={pagination.currentPage}
    setPage={(page) => { setPagination({ ...pagination, currentPage: page })}}
    totalItems={pagination.totalItems}
/>