/*
path: TimelineSeparator.tpl
type: file
unique_id: dfS722oZ
icon: ico-timeline-separator
sourceType: javascript
children: []
*/
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