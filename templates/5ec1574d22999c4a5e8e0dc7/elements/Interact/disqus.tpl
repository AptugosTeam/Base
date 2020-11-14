{% set bpr %}
import { DiscussionEmbed } from 'disqus-react'
{% endset %}
{{ save_delayed('bpr', bpr)}}
<DiscussionEmbed
  shortname='{{ element.values.shortname }}'
  config={
    {
      url: {{ element.values.pageUrl }},
      identifier: {{ element.values.pageIdentifier }}
    }
  }
/>