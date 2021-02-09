{% set bpr %}
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineDot from '@material-ui/lab/TimelineDot'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<TimelineSeparator>
    <TimelineDot />
    <TimelineConnector />
</TimelineSeparator>