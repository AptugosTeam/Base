<picture
  {% if element.values.ClassName %}className={ {{element.values.ClassName}} }{% endif %}
>
  {% if element.values.webppath %}
  <source type="image/webp" srcSet="{{ element.values.webppath }}" />
  {% endif %}
  <img
    src={{ element.values.path|textOrVariable }}
    alt={{ element.values.alt|textOrVariable|default(element.values.path|textOrVariable) }}
    {% if element.values.width %}width={{ element.values.width|textOrVariable }}{% endif %}
    {% if element.values.height %}height={{ element.values.height|textOrVariable }}{% endif %}
  />
</picture>
