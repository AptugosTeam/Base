{% set bpr %}
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<TimelineOppositeContent>{{ content | raw }}</TimelineOppositeContent>
