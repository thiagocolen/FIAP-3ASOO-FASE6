var fs = require('fs');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const dataBaseMockFile = {
    dataBaseMock: {
        restaurantes: [],
    },
}

for (let index = 0; index < 1000; index++) {
    dataBaseMockFile.dataBaseMock.restaurantes.push({
        "nome": "Restaurante " + index,
        "location": {
            "lat": getRandomArbitrary(0, 10000),
            "long": getRandomArbitrary(0, 10000)
        }
    })    
}

const jsonToExport = JSON.stringify(dataBaseMockFile);

fs.writeFile("./app/database.json", jsonToExport, function(err) {
    if (err) {
        console.log(err);
    }
});
