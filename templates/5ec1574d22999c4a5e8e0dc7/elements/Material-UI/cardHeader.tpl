{% set bpr %}
import CardHeader from '@material-ui/core/CardHeader';
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% if element.values.title | slice(0,1) == '{' %}
    {% set theTitle = 'title=' ~ element.values.title %}
{% else %}
    {% set theTitle = 'title="' ~ element.values.title ~ '"' %}
{% endif %}
<CardHeader
    {{ theTitle }}
    {% if element.values.subheader %}subheader="{{ element.values.subheader }}"{% endif %}
>
{{ content | raw }}
</CardHeader>
