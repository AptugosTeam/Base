{% if element.values.localStyles %}
{% set bpr %}
import { mergeClasses } from '../services/utils'
import { makeStyles } from '@material-ui/core/styles'
{% endset %}
{{ save_delayed('bpr',bpr) }}
    const localStyles = makeStyles({
        {{ element.values.localStyles | raw }}
    })
{% endif %}
const {{ page.name | friendly }}: FunctionComponent = (props: any) => {
  {% if element.values.localStyles %}
    const classes = mergeClasses( baseClasses, localStyles())
  {% else %}
    const classes = baseClasses
  {% endif %}
  {% for delay in delayed %}
    {{ delay }}
  {% endfor %}

  {{ content|raw }}
  return (<React.Fragment>