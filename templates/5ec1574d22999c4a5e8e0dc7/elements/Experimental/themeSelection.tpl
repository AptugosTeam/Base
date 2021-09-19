/*
path: themeSelection.tpl
completePath: elements/Experimental/themeSelection.tpl
type: file
unique_id: rtGqPUwH
icon: ico-theme-selection
options:
  - name: theme
    display: Theme
    type: dropdown
    options: website;whatsapp;layout;fantasyx;crm;minimum
  - name: useAsset
    display: Use an Asset
    type: dropdown
    options: >-
      return [['none', 'none'],
      ...aptugo.assetUtils.stylesheets().map(stylesheet => [stylesheet.id,
      stylesheet.name])]
    settings:
      aptugoOnChange: >-
        element = arguments[0]

        var selectedAsset = element.values?.useAsset

        if (selectedAsset !== 'none') {

        //  const assetInfo = aptugo.assetUtils.stylesheets().find(ss => ss.id
        === //selectedAsset)

        //  const currentPage =
        //aptugo.pageUtils.findContainerPage(aptugo.variables.retrieveGlobalVariables('currentElement').unique_id).unique_id

        //  aptugo.variables.setPageVariable(currentPage,{ theme: assetInfo })

          console.log('onchange', element, selectedAsset)
        }
      aptugoOnLoad: |-
        console.log('THEME ONLOAD');
        element = arguments[0];
        var selectedAsset = element.values?.useAsset;
        if (selectedAsset !== 'none') {
          const assetInfo = aptugo.assetUtils.stylesheets().find(ss => ss.id === selectedAsset);
          const currentPage = aptugo.pageUtils.findContainerPage(element).unique_id;
          console.log(assetInfo);
        }
sourceType: javascript
children: []
*/

// Theme selection
{% if element.values.useAsset %}
  {% set asset = element.values.useAsset|assetData %}
  {% set theme = asset.name|friendly %}
  {% set bpr %}
    import {{ asset.name|friendly }} from 'dist/css/{{ asset.name }}'
  {% endset %}
{% else %}
  {% set theme = element.values.theme %}
  {% set bpr %}
    import {{ element.values.theme }} from '../components/Themes/{{ element.values.theme }}.module.scss'
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
