const Ticket = require('../models/ticket');
const Espectador=require('../models/espectador')
const TicketCtrl = {}

TicketCtrl.gettickets = async (req, res) => {
    const tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
}

TicketCtrl.createTicket = async (req, res) => {
  try { 
    const precioTicket=req.body.precioTicket
    const categoriaEspectador= req.body.categoriaEspectador
    const fechaCompra = req.body.fechaCompra
    const espectadorId = req.body.espectador

    const espectador = await Espectador.findById(espectadorId);
    if (!espectador) {
      return res.status(404).json({ mensaje: 'Espectador no encontrado' });
    }
    
    const ticket = new Ticket({
      precioTicket,
      categoriaEspectador,
      fechaCompra,
      espectador: espectador._id
    });
    
    await ticket.save();
    res.json({
      'status': '1',
      'msg': 'Espectador guardado.'
    })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el ticket' });
  }
}

TicketCtrl.deleteTicket= async (req, res) => {
  try {
    await Ticket.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'ticket removed'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}

TicketCtrl.updateTicket= async (req,res) =>{
  try {
    const precioTicket=req.body.precioTicket
    const categoriaEspectador= req.body.categoriaEspectador
    const fechaCompra = req.body.fechaCompra
    const espectadorId = req.body.espectador
    console.log(espectadorId);
    const espectador = await Espectador.findById(espectadorId);
    if (!espectador) {
      return res.status(404).json({ mensaje: 'Espectador no encontrado' });
    }
    
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        precioTicket,
        categoriaEspectador,
        fechaCompra,
        espectador: espectador._id
      },
      { new: true }
    );
    
    if (!ticket) {
      return res.status(404).json({ mensaje: 'Ticket no encontrado' });
    }
    res.json({
      'status': '1',
      'msg': 'transaccion updated'
    })
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el ticket' });
  }
}
TicketCtrl.getTicketsPorEspectador =async (req,res)=>{
  try {
    const categoria = req.params.categoria;
    const tickets = await Ticket.find({ categoriaEspectador: categoria }).populate('espectador');
    const espectadores = tickets.map(ticket => ticket.espectador);
    res.json(espectadores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los espectadores' });
  }
}
module.exports = TicketCtrl;