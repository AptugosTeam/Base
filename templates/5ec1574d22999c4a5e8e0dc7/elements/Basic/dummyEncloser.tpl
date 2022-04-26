/*
path: dummyEncloser.tpl
completePath: elements/Basic/dummyEncloser.tpl
unique_id: SXP50OTX
children: []
icon: ico-dummy-enclosure
helpText: Organizational unit with no render value
options:
  - name: titleAsComment
    display: Use Name as Comment
    type: checkbox
    options: ''
*/
{% if element.values.useTitleAsComment %}// {{ element.name }}{% endif %}
{{ content | raw }}

