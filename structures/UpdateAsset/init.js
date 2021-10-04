const existing = Application.assets.find(asset => asset.id === Parameters.asset.id)
let newAsset
let _id = null
if (existing) {
    var foundIndex = Application.assets.findIndex(asset => asset.id == Parameters.asset.id)
    Application.assets[foundIndex] = Parameters.asset
    _id = Parameters.asset.id
} else {
    newAsset = {
        type: Parameters.asset.type,
        id: Parameters.asset.id || aptugo.generateID(),
        name: Parameters.asset.name || Parameters.asset.source.name
    }

    if (Parameters.type === 'stylesheetAsset') {
        newAsset.type = 'stylesheet'
    } else if (Parameters.type === "imageAsset") {
        newAsset.type = 'image'
    }

    Application.assets.push(newAsset)
    _id = newAsset.id
}

if (Parameters.asset.fileContents) {
    if ( window.sendAptugoCommand ) {
        window.sendAptugoCommand({
            section: 'assets',
            command: 'setfile',
            options: `--app ${Application.settings.name} --id '${_id}' --filename '${newAsset.name}'`,
            file: JSON.stringify(Parameters.asset.fileContents)
        }).then(res => {
            console.log('Asset created')
        })
    }
}

return Application