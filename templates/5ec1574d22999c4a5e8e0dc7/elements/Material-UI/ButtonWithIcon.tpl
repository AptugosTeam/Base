{% set bpr %}
import Button from '@material-ui/core/Button'
import {{ element.values.icon }}Icon from '@material-ui/icons/{{ element.values.icon }}'
{% endset %}
{{ save_delayed('bpr', bpr ) }}
<Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<{{ element.values.icon }}Icon />}
      >
        {{ element.values.texto }}
      </Button>