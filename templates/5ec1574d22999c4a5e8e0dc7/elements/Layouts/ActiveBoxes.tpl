/*
path: ActiveBoxes.tpl
completePath: elements/Layouts/ActiveBoxes.tpl
unique_id: geLuluT8
*/
{% set bpr %}
import clsx from 'clsx'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import Grid from '@material-ui/core/Grid'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const [activeBoxesActive, setActiveBoxesActive] = React.useState<any>(1)
{% endset %}
{{ save_delayed('ph',ph) }}

<Grid container className={classes.activeBoxesLayout}>
{{ content | raw }}
</Grid>