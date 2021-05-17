/*
path: googleAnalytics.tpl
type: file
unique_id: l7PZVEme
icon: ico-google-analytics
settings:
  - name: IndexBodyAdd
    value: >-
      <!-- Global site tag (gtag.js) - Google Analytics --> <script async
      src="https://www.googletagmanager.com/gtag/js?id=G-1Y6LJ8FYCP"></script>
      <script>   window.dataLayer = window.dataLayer || [];   function
      gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   
      gtag('config', 'G-1Y6LJ8FYCP'); </script>
options:
  - name: trackingid
    display: Tracking ID
    type: text
    options: ''
sourceType: javascript
children: []
*/
// Google Analytics Track {{ element.values.trackingid }}