import React, { FunctionComponent } from 'react'
import baseClasses from './layout.module.scss'

{% for delay in delayed %}
  {{ delay }}
{% endfor %}
  
{{ content | raw }}
