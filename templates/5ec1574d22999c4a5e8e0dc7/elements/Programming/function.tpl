{% if element.values.priority %}
{% set ph %}
const {{ element.values.functionName }} = ({{ element.values.functionParameters }}) => {
  {{ element.values.functionBody | raw }}
  {{ content | raw }}  
}
{% endset %}
{{ save_delayed('ph',ph,1) }}
{% else %}
const {{ element.values.functionName }} = ({{ element.values.functionParameters }}) => {
  {{ element.values.functionBody | raw }}
  {{ content | raw }}  
}
{% endif %}

