/*
path: themeSelection.tpl
type: file
unique_id: rtGqPUwH
icon: smarty.svg
options:
  - name: theme
    display: Theme
    type: dropdown
    options: website;whatsapp;layout;fantasyx;crm
  - name: useAsset
    display: Use an Asset
    type: dropdown
    options: >-
      return [['none', 'none'],
      ...aptugo.assetUtils.stylesheets().map(stylesheet => [stylesheet.id,
      stylesheet.name])]
    settings:
      aptugoOnChange: |-
        element = arguments[0]
        var selectedAsset = element.values?.useAsset
        console.log('onload', element, selectedAsset)
      aptugoOnLoad: |-
        element = arguments[0]
        var selectedAsset = element.values?.useAsset
        console.log('onload', element, selectedAsset)
sourceType: javascript
children: []
*/
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