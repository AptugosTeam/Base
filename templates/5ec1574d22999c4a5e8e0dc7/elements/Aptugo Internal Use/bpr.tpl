/*
path: bpr.tpl
type: file
unique_id: 9NRSTvDR
icon: ico-field
sourceType: javascript
internalUse: true
children: []
*/
import React, { FunctionComponent } from 'react'
import baseClasses from './layout.module.scss'

{% for delay in delayed %}
  {{ delay }}
{% endfor %}
  
{{ content | raw }}
