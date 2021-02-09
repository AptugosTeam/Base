{% set bpr %}
import ReactHtmlParser from 'react-html-parser'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{ ReactHtmlParser ({{ element.values.html | raw }}{{ content | raw }}) }