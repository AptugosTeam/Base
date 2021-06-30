if (data.{{ field.column_name | friendly }}) updatedData['{{ field.column_name | friendly }}'] = bcrypt.hashSync(data.{{ field.column_name | friendly }}, 10)
