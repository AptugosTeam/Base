const fetch = require('node-fetch');
let url = 'https://{{ route.values.appurl }}.myvtex.com{{ route.values.endpoint }}'
{% if route.values.endpoint == "/api/catalog_system/pub/category/tree" %}url = url + '/{{ route.values.levels }}'{% endif %}

let options = {
  method: 'GET',
  {% if route.values.endpoint == '/api/catalog_system/pvt/products/GetProductAndSkuIds' %}
  qs: {categoryId: '{{ route.values.categoryId }}', _from: '{{ route.values._from }}', _to: '{{ route.values._to }}'},
  {% endif %}
  {% if route.values.endpoint == '/api/oms/pvt/orders' %}
  qs: {f_creationDate: 'creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]'},
  {% endif %}
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-vtex-api-appkey': '{{ route.values.appkey }}',
    'x-vtex-api-apptoken': '{{ route.values.apptoken }}'
  }
}

fetch(url, options)
  .then((res) => res.json())
  .then((json) => res.status(200).json(json))
  .catch((err) => res.status(400).json({ message: 'Error fetching from VTEX', err: err.message }))
