{% set bpr %}
import CardMedia from '@material-ui/core/CardMedia'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<CardMedia
    {% if  element.values.className %}className={ {{ element.values.className }} }{% endif %}
    {% if  element.values.title %}title={ {{ element.values.title }} }{% endif %}
    image={{ element.values.image|textOrVariable }}
/>