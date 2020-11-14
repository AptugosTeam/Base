if (req.files && req.files.{{ field.column_name | friendly }} && req.files.{{ field.column_name | friendly }}.data) {
    fs.writeFileSync(`${req.app.get('filesFolder')}/${req.files.{{ field.column_name | friendly }}.name}`, req.files.{{ field.column_name | friendly }}.data)
    updatedData['{{ field.column_name | friendly }}'] = req.files.{{ field.column_name | friendly }}.name
}