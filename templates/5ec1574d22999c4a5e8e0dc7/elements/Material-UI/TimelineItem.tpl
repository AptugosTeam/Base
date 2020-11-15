{% set bpr %}
import TimelineItem from '@material-ui/lab/TimelineItem'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<TimelineItem
    {% if element.values.onClick %}onClickCapture={{ element.values.onClick }}{% endif %}
>
    {{ content | raw }}
</TimelineItem>
