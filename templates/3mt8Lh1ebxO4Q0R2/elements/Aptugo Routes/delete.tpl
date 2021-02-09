const id = getIdParam(req);
await models.{{ table.name | friendly }}.destroy({
  where: {
    id: id
  }
});
res.status(200).end();