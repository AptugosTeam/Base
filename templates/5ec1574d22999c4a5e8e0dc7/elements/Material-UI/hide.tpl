{% set bpr %}
import Hidden from '@material-ui/core/Hidden'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Hidden {{ element.values.hidevalue }}>
{{ content | raw }}
</Hidden>