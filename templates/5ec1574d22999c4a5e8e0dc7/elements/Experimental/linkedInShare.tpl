{% set bpr %}
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'
{% endset %}
{{ save_delayed('bpr',bpr) }}
<IconButton onClick={() => { window.open (`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, "mywindow","menubar=0,resizable=1,width=500,height=615") }}>
  <LinkedInIcon />
</IconButton>