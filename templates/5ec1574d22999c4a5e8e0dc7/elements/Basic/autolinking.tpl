{% if element.values.fromLink %}
  {% set pageFrom = element.values.fromLink | elementData %}
{% else %}
  {% set pageFrom = page %}
{% endif %}
{% for item in pageFrom.children %}
	{% if (item.type == 'page') %}
    {% set innerParams = { 'element': { 'unique_id': item.unique_id, values: { 'destination': item.path, 'linkText': item.name } } } %}
    {% include includeTemplate('navLink.tpl') with innerParams %}
  {% endif %}
{% endfor %}
