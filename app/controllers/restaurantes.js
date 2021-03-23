const express = require('express');
const router = express.Router();

const restauranteService = require('../service/restaurantes')
const restauranteServiceInstance = new restauranteService()

router.get('/getAll', function (req, res, next) {
    res.status(200).send(
        restauranteServiceInstance.getNearRestaurantes('1000', '1000')
    );
}); 

router.post('/getAll', function (req, res, next) {
    res.status(200).send(
        restauranteServiceInstance.getNearRestaurantes(req.body.lat, req.body.long, req.body.radius)
    );
})

module.exports = router;