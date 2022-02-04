const readUploadedFileAsText = () => {
  var reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = function(e) {
      var contents = e.target.result
      resolve(contents)
    }
    reader.readAsText(Parameters.element)
  })
}

const fileSource = await readUploadedFileAsText()

const template = aptugo.templateUtils.loadedTemplate(Parameters.template)
const elementsFolder = template.files.find(file => file.path === 'elements')
const name = `${aptugo.friendly(Parameters.Name)}.tpl`

const newFile = {
  path: name,
  type: 'file',
  unique_id: aptugo.generateID(),
  selected: true,
  icon: 'ico-field',
  source: fileSource
}

const newTemplateFile = aptugo.templateUtils.addChild(newFile, elementsFolder, template.files)
aptugo.templateUtils.fsSave(template)

Store.dispatch({
  type: 'LOAD_TEMPLATE',
  payload: template._id
})

return Application
