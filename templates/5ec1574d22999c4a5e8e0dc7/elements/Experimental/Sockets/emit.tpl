/*
path: emit.tpl
completePath: elements/Experimental/Sockets/emit.tpl
display: Send a message to the server
type: file
unique_id: emit
icon: ico-field
children: []
options:
  - name: event
    display: Event Name
    type: text
  - name: parameters
    display: Data
    type: text
*/
socketRef.current?.emit('{{ element.values.event }}'{% if element.values.parameters %}, {{ element.values.parameters }}{% endif %})