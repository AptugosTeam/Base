)}

{% for delay in delayed %}
{{ delay }}
{% endfor %}

export default {{ page.name | friendly }}
