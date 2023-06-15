//defino controlador para el manejo de CRUD
const transaccionCtrl = require('../controllers/transaccionController');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/cliente/:email', transaccionCtrl.getTransaccionEmail);
router.get('/divisas/:monedaOrigen/:monedaDestino', transaccionCtrl.getOrigenDestino);
//exportamos el modulo de rutas
module.exports = router;