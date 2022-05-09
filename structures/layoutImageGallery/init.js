Parameters.table_unique_id = aptugo.generateID()

const imagesTable = {
  "type": "table",
  "unique_id": Parameters.table_unique_id,
  "name": "Images",
  "singleName": "Image",
  "subtype": "Aptugo",
  "fields": [{
    "column_name": "Picture",
    "data_type": "Image",
    "key": "Auto Number",
    "length": "11"
  }],
  "definedRoutes": [{
    "route_name": "Get all records",
    "route_active": true,
    "route_method": "get",
    "route_path": "/api/{{ table.name|friendly|lower }}",
    "route_code": null,
    "route_template": "get"
  },{
    "route_name": "Search records",
    "route_active": true,
    "route_method": "get",
    "route_path": "/api/{{ table.name|friendly|lower }}/search",
    "route_code": null,
    "route_template": "search"
  },{
    "route_name": "Retrieve a single record",
    "route_active": true,
    "route_method": "get",
    "route_path": "/api/{{ table.name|friendly|lower }}/:ID",
    "route_code": null,
    "route_template": "getone"
  },{
    "route_name": "Add a record",
    "route_active": true,
    "route_method": "post",
    "route_path": "/api/{{ table.name|friendly|lower }}",
    "route_code": null,
    "route_template": "add"
  },{
    "route_name": "Update a record",
    "route_active": true,
    "route_method": "put",
    "route_path": "/api/{{ table.name|friendly|lower }}/:ID",
    "route_code": null,
    "route_template": "update"
  },{
    "route_name": "Delete a record",
    "route_active": true,
    "route_method": "delete",
    "route_path": "/api/{{ table.name|friendly|lower }}/:ID",
    "route_code": null,
    "route_template": "delete"
  }],
  "x": 198,
  "y": 134
}

if (!Application.tables) Application.tables = []
Application.tables.push(imagesTable)

return Application