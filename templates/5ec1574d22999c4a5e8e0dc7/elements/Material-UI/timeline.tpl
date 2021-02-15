/*
icon: ico-timeline
path: timeline.tpl
sourceType: javascript
unique_id: kIUxePN0
*/
{% set bpr %}
import Timeline from '@material-ui/lab/Timeline'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Timeline>{{ content | raw }}</Timeline>
    