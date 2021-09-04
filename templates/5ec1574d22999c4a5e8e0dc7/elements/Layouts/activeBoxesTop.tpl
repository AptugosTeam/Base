/*
path: activeBoxesTop.tpl
completePath: elements/Layouts/activeBoxesTop.tpl
unique_id: rqa1TS3P
*/
{% set bpr %}
import Grid from '@material-ui/core/Grid'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import Button from '@material-ui/core/Button'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import Paper from '@material-ui/core/Paper'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.children %}
  {% set columns = element.children|length %}
  {% for child in element.children %}
    <Grid item xs={12} md={ {{ 12 / columns }} } className={
      clsx([
        activeBoxesActive === {{ loop.index }} && classes.active,
        {% if element.values.className %}{{ element.values.className }}{% endif %},
        {% if element.values.activeClassName %}activeBoxesActive === {{ loop.index }} && {{ element.values.activeClassName }}{% endif %}
      ])
    }>
      <Button onClickCapture={(params) => { setActiveBoxesActive( {{ loop.index }} ) } }>
        <Paper elevation={1} variant="elevation">
          {{ child.rendered | raw }}
        </Paper>
      </Button>
    </Grid>
  {% endfor %}
{% endif %}
