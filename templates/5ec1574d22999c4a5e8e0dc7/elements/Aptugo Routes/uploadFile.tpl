/*
path: uploadFile.tpl
type: file
unique_id: wPfUkRmf
icon: ico-field
children: []
settings:
  - name: BackendPackages
    value: '"image-size": "latest",'
*/

const fs = require('fs')
var sizeOf = require('image-size')
if (req.files) {
    fs.writeFileSync(`${req.app.get('filesFolder')}/${req.files.image.name}`, req.files.image.data)
    var dimensions = sizeOf(`${req.app.get('filesFolder')}/${req.files.image.name}`)
    res.send({
    name: req.files.image.name,
    width: dimensions.width,
    height: dimensions.height
    })
}