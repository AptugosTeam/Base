{% set bpr %}
import TimelineContent from '@material-ui/lab/TimelineContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<TimelineContent>{{ content | raw }}</TimelineContent>
