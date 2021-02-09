const id = getIdParam(req);
const {{ table.name | friendly }} = await models.{{ table.name | friendly }}.findByPk(id);
if ({{ table.name | friendly }}) {
  res.status(200).json({{ table.name | friendly }});
} else {
  res.status(404).send('404 - Not found');
}