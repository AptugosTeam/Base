/*
path: b.tpl
completePath: elements/Aptugo Internal Use/b.tpl
type: file
unique_id: evkkxPDn
icon: ico-field
sourceType: javascript
internalUse: true
children: []
options:
  - name: className
    display: ClassName
    type: chips
    options: >-
      return aptugo.assetUtils.grabCssSelectors(
      aptugo.variables.retrievePageVariablesFromElement(arguments[0],'theme') )
  - name: primaryColor
    display: Primary Color
    type: dropdown
    options: >-
      red;pink;purple;deepPurple;indigo;blue;lightBlue;cyan;teal;green;lightGreen;lime;yellow;amber;orange;deepOrange;brown;grey;blueGrey
*/


{% if element.values.primaryColor %}
{% set bpr %}
import {{ element.values.primaryColor }} from '@material-ui/core/colors/{{ element.values.primaryColor }}'
{% endset %}
{{ save_delayed('bpr', bpr) }}
{% set bpr %}
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const aptugotheme = createTheme({
  palette: {
    primary: {{ element.values.primaryColor }},
  },
})

{% endset %}
{{ save_delayed('bpr', bpr) }}
<ThemeProvider theme={aptugotheme}>
{% endif %}
{% if element.values.className is defined and element.values.className|length > 1 %}
{% set bpr %}
import clsx from 'clsx'
{% endset %}
{{ save_delayed('bpr',bpr) }}
  {% set class = 'clsx(' ~ element.values.className|join(',') ~ ')' %}
{% else %}
  {% set class = element.values.className|default('classes.mainPanel') %}
{% endif %}
<div className={ {{ class }} } >
{{ content|raw }}
</div>
{% if element.values.primaryColor %}
</ThemeProvider>
{% endif %}
