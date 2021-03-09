/*
path: MaterialIcon.tpl
type: file
unique_id: RhqkoHE4
icon: ico-icon-button
helpText: Shows a material icon from the list
children: []
options:
  - name: icon
    display: Icon
    type: text
    options: Access
  - name: color
    display: Color
    type: dropdown
    options: default;primary;secondary;action;disabled
*/
{% set bpr %}
import { {{ element.values.icon|default('HelpOutline') }} } from '@material-ui/icons';
{% endset %}
{{ save_delayed('bpr',bpr) }}
<{{ element.values.icon|default('HelpOutline') }} {% if element.values.color %}color="{{ element.values.color }}"{% endif %}/>