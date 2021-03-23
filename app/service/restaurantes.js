const restaurantesRepository = require('../repository/restaurantes')
const restaurantesRepositoryInstance = new restaurantesRepository()

class RestaurantesService {

    getNearRestaurantes(lat, long, radius) {
        const allRestaurantes = restaurantesRepositoryInstance.getAllRestaurantes();

        const filteredRestaurantes = allRestaurantes.filter((restaurante) => {

            if (
                restaurante.location.lat < Number(lat) + Number(radius) &&
                restaurante.location.lat > Number(lat) - Number(radius) &&
                restaurante.location.long < Number(long) + Number(radius) &&
                restaurante.location.long > Number(long) - Number(radius)
            ) {
                return restaurante
            }
        })

        const message = 'Não há restaurantes próximo a você.'
        
        return filteredRestaurantes.length === 0 ? message : filteredRestaurantes
    }

}

module.exports = RestaurantesService