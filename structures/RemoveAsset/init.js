console.log(Parameters.id)
Application.assets = Application.assets.filter(asset => asset.id !== Parameters.id)
return Application