/*
path: widgetDebugSockets.tpl
display: Widget - Debug Sockets
completePath: elements/Experimental/Sockets/widgetDebugSockets.tpl
type: file
unique_id: widgetDebugSockets
icon: ico-field
children: []
options:
  - name: autoconsole
    display: Show Messages in console
    helpText: Displays all messages received from the socket connection at the console
    type: checkbox
*/
socketRef.current?.prependAny((event, ...args) => {
  {% if element.values.autoconsole %}
    console.info('🚨 Socket Debug:', event, args)
  {% endif %}
  {{ content | raw }}
})