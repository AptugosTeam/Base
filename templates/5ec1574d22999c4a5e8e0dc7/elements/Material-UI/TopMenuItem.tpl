<TopMenuItem
    {% if element.values.text %}text={{ element.values.text | textOrVariable}}{% endif %}
    {% if element.values.link %}link={{ element.values.link | textOrVariable }}{% endif %}
>{{ content|raw }}</TopMenuItem>