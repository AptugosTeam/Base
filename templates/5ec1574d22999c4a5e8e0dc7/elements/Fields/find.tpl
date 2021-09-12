/*
path: find.tpl
completePath: elements/Fields/find.tpl
unique_id: SBHiymdS
*/
{% set population = false %}
{% set foundFieldData = [] %}
{% for relatedField in builder.plainFields %}
    {% if relatedField.reference %}
        {% set relData = relatedField.reference | fieldData %}
        {% if (table.unique_id == relData.table.unique_id) and (relData.unique_id == field.unique_id) %}
            {% set foundFieldData = foundFieldData|merge([relatedField | fieldData]) %}
            {% set population = true %}
        {% endif %}
    {% endif %}
{% endfor %}
{% if population %}
{% for ffd in foundFieldData %}
{% set subpopulation = [] %}
{% for subpopulationField in ffd.table.fields %}
    {% if subpopulationField.reference %}
        {% set subrelData = subpopulationField.reference | fieldData %}
        {% if (table.unique_id != subrelData.table.unique_id) %}
            {% set subpopulation = subpopulation|merge(["{ model: '" ~ subrelData.table.name | friendly ~ "', path: '" ~ subpopulationField.column_name | friendly ~ "' }"]) %}
        {% endif %}
    {% endif %}
{% endfor %}
.populate({
    strictPopulate: false,
    path: '{{ ffd.table.name | friendly }}'
    {% for sub in subpopulation %}
    , populate: {{ sub }}
    {% endfor %}
})
{% endfor %}
{% endif %}
