//defino controlador para el manejo de CRUD
const productoCtrl = require('../controllers/ProductoController');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getProducts);
router.post('/', productoCtrl.createProduct);
router.get('/:id', productoCtrl.getProduct);
router.put('/:id', productoCtrl.editProd);
router.delete('/:id', productoCtrl.deleteProd);
//exportamos el modulo de rutas
module.exports = router;