console.log(Parameters)
const fs = await aptugo.importFS()
const path = aptugo.importPath()
const name = aptugo.friendly(Parameters.name)
const sourcePath = Parameters.folder.path
const fullsavepath = aptugo.defaults('templatesFolder')
const destinationPath = path.join(fullsavepath, name)
aptugo.copyFolderRecursiveSync(sourcePath, destinationPath, { exclude: ['node_modules'] })

aptugo.templateUtils.fsSave({
  name: Parameters.name,
  _id: name
})