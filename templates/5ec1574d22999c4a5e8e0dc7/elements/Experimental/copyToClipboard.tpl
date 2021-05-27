/*
path: copyToClipboard.tpl
type: file
unique_id: 11u8ATDo
icon: ico-field
children: []
*/

const copyToClipboard = (str, e) => {
  const el = document.createElement('textarea')
  el.value = str.replace(/<br\s*\/?>/mg,"\n")
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  var container = e ? e.target.parentElement : document.body
  container.appendChild(el)
  el.select()
  document.execCommand('copy')
  container.removeChild(el)
}
