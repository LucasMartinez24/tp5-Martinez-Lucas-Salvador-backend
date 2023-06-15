//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/ticketController');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.gettickets);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.updateTicket);
router.get('/espectadores/:categoria', ticketCtrl.getTicketsPorEspectador);
//exportamos el modulo de rutas
module.exports = router;