const {{ table.name | friendly }} = await models.{{ table.name | friendly }}.findAll();
res.status(200).json({{ table.name | friendly }});
