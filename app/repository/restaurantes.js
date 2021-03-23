const db = require('../database.json')

class RestaurantesRepository {
    
    getAllRestaurantes() {
        return db.dataBaseMock.restaurantes;
    }
}

module.exports = RestaurantesRepository;
