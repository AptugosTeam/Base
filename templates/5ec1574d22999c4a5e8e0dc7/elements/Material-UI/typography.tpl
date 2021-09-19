/*
path: typography.tpl
completePath: elements/Material-UI/typography.tpl
unique_id: hmTuTaFz
children: []
icon: ico-typography
helpText: Renders different typographic html elements
options:
  - name: tag
    display: Tag
    type: dropdown
    options: >-
      h1;h2;h3;h4;h5;h6;subtitle1;subtitle2;body1;body2;caption;button;overline;srOnly;inherit
*/
{% set bpr %}
import Typography from '@mui/material/Typography'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Typography
  variant="{{ element.values.tag }}"
  {% if element.values.color %}color="{{ element.values.color }}"{% endif %}
  {% if element.values.className %}className={ {{ element.values.className }} }{% endif %}>
{{ content | raw }}
</Typography>
