/*
path: NumberFormat.tpl
type: file
unique_id: A7g9nkBV
icon: ico-field
children: []
options:
  - name: Content
    display: Content
    type: text
    options: ''
  - name: CountryCode
    display: Country Code (en-US)
    type: text
    settings:
      default: en-US
      active: true
  - name: ClassName
    display: ClassName
    type: text
    options: ''
*/
{% if element.values.ClassName %}<span className={ {{ element.values.ClassName }} }>{% endif %}
{
  new Intl.NumberFormat({{ element.values.CountryCode | textOrVariable }}, { style: 'currency', currency: 'UYU', maximumFractionDigits: 2 }).format({{ element.values.Content | raw }}{{ content | raw }})
}
{% if element.values.ClassName %}</span>{% endif %}