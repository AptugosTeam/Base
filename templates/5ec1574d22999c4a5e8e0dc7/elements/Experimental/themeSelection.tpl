{% set bpr %}
import {{ element.values.theme }} from './{{ element.values.theme }}.module.scss'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import { mergeClasses } from '../services/utils'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const theme = {{ element.values.theme }}
{% endset %}
{{ save_delayed('ph',ph, 1) }}