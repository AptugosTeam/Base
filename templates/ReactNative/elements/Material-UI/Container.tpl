/*
path: Container.tpl
type: file
unique_id: 3NDAATVX
icon: ico-field
helpText: >-
  The container centers your content horizontally. It's the most basic layout
  element.
options:
  - name: disableGutters
    display: Disable Gutters
    type: checkbox
    options: ''
  - name: fixed
    display: Fixed?
    type: checkbox
    options: ''
  - name: maxWidth
    display: Max Width
    type: dropdown
    options: lg;md;sm;xl;xs;false
  - name: className
    display: className
    type: text
    options: ''
sourceType: javascript
children: []
*/
{/* Container */}
{{ content | raw }}