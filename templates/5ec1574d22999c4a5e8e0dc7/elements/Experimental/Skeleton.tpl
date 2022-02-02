/*
path: Skeleton.tpl
type: file
unique_id: skeleton666
icon: ico-field
helpText: Generate Skeleton
children: []
*/
{% set bpr %}
import Skeleton from '@mui/material/Skeleton'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<Skeleton variant="rectangular" width={210} height={118} />