/*
path: activeBoxesMain.tpl
completePath: elements/Layouts/activeBoxesMain.tpl
unique_id: Avpcw8C8
*/
{% set bpr %}
import Grid from '@material-ui/core/Grid'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import Paper from '@material-ui/core/Paper'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.children %}
  {% set columns = element.children|length %}
  <Grid item xs={12} md={12}>
    <Paper elevation={1}>
      {% for child in element.children %}
        {activeBoxesActive === {{ loop.index }} && (
          {{ child.rendered | raw }}
        )}
      {% endfor %}
    </Paper>
  </Grid>
{% endif %}
