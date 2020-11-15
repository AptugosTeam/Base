if (req.body.{{ field.column_name | friendly }}) updatedData['{{ field.column_name | friendly }}'] = bcrypt.hashSync(req.body.{{ field.column_name | friendly }}, 10)
