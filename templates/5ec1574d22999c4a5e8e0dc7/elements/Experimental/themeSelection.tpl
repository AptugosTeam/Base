{% if element.values.useAsset %}
  {% set asset = element.values.useAsset|assetData %}
  {% set theme = asset.name|friendly %}
  {% set bpr %}
    import {{ asset.name|friendly }} from 'dist/css/{{ asset.name }}'
  {% endset %}
{% else %}
  {% set theme = element.values.theme %}
  {% set bpr %}
    import {{ element.values.theme }} from './{{ element.values.theme }}.module.scss'
  {% endset %}
{% endif %}
{{ save_delayed('bpr',bpr) }}
{% set bpr %}
import { mergeClasses } from '../services/utils'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const theme = {{ theme }}
{% endset %}
{{ save_delayed('ph',ph, 1) }}