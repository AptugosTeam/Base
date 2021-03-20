console.log(Parameters, 'params')

const existing = Application.assets.find(asset => asset.id === Parameters.asset.id)
console.log(existing)
if (existing) {
    console.log('exists', Parameters)
    var foundIndex = Application.assets.findIndex(asset => asset.id == Parameters.asset.id)
    Application.assets[foundIndex] = Parameters.asset
} else {
    const newAsset = {
        type: 'image',
        id: Parameters.asset._id,
        name: Parameters.asset.source.name
    } 

    if (Parameters.type === 'stylesheetAsset') {
        newAsset.type = 'stylesheet'
    }

    Application.assets.push(newAsset)
}

return Application