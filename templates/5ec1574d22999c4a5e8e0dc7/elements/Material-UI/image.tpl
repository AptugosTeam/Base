{% set path = element.values.path %}
{% set webppath = element.values.webppath %}
{% set width = element.values.width|default(null) %}
{% set height = element.values.height|default(null) %}
{% if element.values.useAsset %}
  {% set asset = element.values.useAsset|assetData %}
  {% if width == null %}
    {% set width = asset.width %}
  {% endif %}
  {% if height == null %}
    {% set height = asset.height %}
  {% endif %}
  {% set path = '/img/' ~ asset.name %}
  {% if asset.versions %}
    {% for version in asset.versions %}
      {% if (version.type == 'webP' or version.type == 'webp') %}
        {% set webppath = '/img/' ~ version.name %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endif %}
<picture
  {% if element.values.ClassName %}className={ {{element.values.ClassName}} }{% endif %}
>
  {% if webppath %}
  <source type="image/webp" srcSet="{{ webppath }}" />
  {% endif %}
  <img
    src={{ path|textOrVariable }}
    alt={{ element.values.alt|textOrVariable|default(path|textOrVariable) }}
    {% if width %}width={{ width|textOrVariable }}{% endif %}
    {% if height %}height={{ height|textOrVariable }}{% endif %}
  />
</picture>
