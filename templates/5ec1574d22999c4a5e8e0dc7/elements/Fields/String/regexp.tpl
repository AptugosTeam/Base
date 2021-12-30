/*
path: regexp.tpl
type: file
unique_id: gIguXRTK
icon: file.svg
children: []
*/

// regexp validation
if (
  !String(data.{{ field.column_name | friendly }}).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
) {
  options.res.status(422).send({ message: '{{ field.column_name }} debe ser un email', field: '{{ field.column_name | friendly }}' })
}
