{% set bpr %}
import TopMenu, { TopMenuItem } from '../components/TopMenu'
{% endset %}
{{ save_delayed('bpr', bpr) }}
<TopMenu {% if element.values.className %}className={ {{ element.values.className }}}{% endif %}>
{{content|raw}}
</TopMenu>
