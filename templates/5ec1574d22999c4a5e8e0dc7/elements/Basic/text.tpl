{% if element.values.ClassName %}<span className={ {{ element.values.ClassName }} }>{% endif %}
{{ element.values.Content | raw }}{{ content | raw }}
{% if element.values.ClassName %}</span>{% endif %}