{% set bpr %}
import {Helmet} from 'react-helmet'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Helmet>
    {% if element.values.title %}<title>{{ element.values.title }}</title>{% endif %}
    {% if element.values.description %}<meta name="description" content={{ element.values.description | textOrVariable }} />{% endif %}
    {% if element.values.ogtitle %}<meta name="og:title" content={{ element.values.ogtitle | textOrVariable }} />{% endif %}
    {% if element.values.ogimage %}<meta name="og:image" content={{ element.values.ogimage | textOrVariable }} />{% endif %}
    {% if element.values.ogdescription %}<meta name="og:description" content={{ element.values.ogdescription | textOrVariable }} />{% endif %}
    {% if element.values.ogurl %}<meta name="og:url" content={{ element.values.ogurl | textOrVariable }} />{% endif %}
</Helmet>
