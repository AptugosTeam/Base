navigator.geolocation.getCurrentPosition((position) => { 
    {{ element.values.varName|default('setleaftLetPosition') }}([ position.coords.latitude, position.coords.longitude ])
})
