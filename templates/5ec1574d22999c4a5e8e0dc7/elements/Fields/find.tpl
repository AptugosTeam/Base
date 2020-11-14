{% for relatedField in builder.plainFields %}
    {% if relatedField.reference %}
        {% set relData = relatedField.reference | fieldData %}
        {% if (table.unique_id == relData.table.unique_id) and (relData.unique_id == field.unique_id) %}
            {% set foundFieldData = relatedField | fieldData %}
.populate('{{ foundFieldData.table.name | friendly }}')
        {% endif %}
    {% endif %}
{% endfor %}
