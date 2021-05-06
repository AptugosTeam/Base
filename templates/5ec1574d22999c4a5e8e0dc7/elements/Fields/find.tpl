{% set population = false %}
{% set foundFieldData = null %}
{% set subpopulation = null %}
{% for relatedField in builder.plainFields %}
    {% if relatedField.reference %}
        {% set relData = relatedField.reference | fieldData %}
        {% if (table.unique_id == relData.table.unique_id) and (relData.unique_id == field.unique_id) %}
            {% set foundFieldData = relatedField | fieldData %}
            {% set population = true %}
        {% endif %}
    {% endif %}
{% endfor %}
{% if population %}
{% for subpopulationField in foundFieldData.table.fields %}
    {% if subpopulationField.reference %}
        {% set subrelData = subpopulationField.reference | fieldData %}
        {% if (table.unique_id != subrelData.table.unique_id) %}
            {% set subpopulation = "{ model: '" ~ subrelData.table.name | friendly ~ "', path: '" ~ subpopulationField.column_name | friendly ~ "' }" %}
        {% endif %}
    {% endif %}
{% endfor %}
.populate({
    path: '{{ foundFieldData.table.name | friendly }}'
    {% if subpopulation %}
    , populate: {{ subpopulation }}
    {% endif %}
})
{% endif %}
