{% set bpr %}
import { {{ element.values.icon|default('HelpOutline') }} } from '@material-ui/icons';
{% endset %}
{{ save_delayed('bpr',bpr) }}
<{{ element.values.icon|default('HelpOutline') }} {% if element.values.color %}color="{{ element.values.color }}"{% endif %}/>