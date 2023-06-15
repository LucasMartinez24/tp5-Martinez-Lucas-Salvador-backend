//defino controlador para el manejo de CRUD
const espectadorCtrl = require('../controllers/espectadorController');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', espectadorCtrl.getEspectadores);
router.post('/', espectadorCtrl.createEspectador);
router.get('/:id', espectadorCtrl.getEspectador);
//exportamos el modulo de rutas
module.exports = router;