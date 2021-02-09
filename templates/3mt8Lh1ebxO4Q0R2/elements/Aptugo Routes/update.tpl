const id = getIdParam(req);

// We only accept an UPDATE request if the `:id` param matches the body `id`
if (req.body.id === id) {
  await models.{{ table.name | friendly }}.update(req.body, {
    where: {
      id: id
    }
  });
  res.status(200).end();
} else {
  res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
}