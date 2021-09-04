/*
path: update.tpl
completePath: elements/Fields/Image/update.tpl
unique_id: hILFvubz
*/
if (options.req.files && options.req.files.{{ field.column_name | friendly }} && options.req.files.{{ field.column_name | friendly }}.data) {
    fs.writeFileSync(`${options.req.app.get('filesFolder')}/${options.req.files.{{ field.column_name | friendly }}.name}`, options.req.files.{{ field.column_name | friendly }}.data)
    updatedData['{{ field.column_name | friendly }}'] = options.req.files.{{ field.column_name | friendly }}.name
}