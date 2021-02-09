if (req.body.id) {
  res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
} else {
  await models.{{ table.name | friendly }}.create(req.body);
  res.status(201).end();
}