const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}
transaccionCtrl.getTransacciones = async (req, res) => {
  var transacciones = await Transaccion.find();
  res.json(transacciones);
}
transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
  try {
    await transaccion.save();
    res.json({
      'status': '1',
      'msg': 'transaccion guardado.'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }
}
transaccionCtrl.getTransaccion = async (req, res) => {
  const transaccion = await Transaccion.findById(req.params.id);
  res.json(transaccion);
}
transaccionCtrl.getTransaccionEmail=async (req,res)=>{
  try {
    const emailCliente = req.params.email;
    const transacciones = await Transaccion.find({ emailCliente });
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el histórico de transacciones' });
  }
}
transaccionCtrl.getOrigenDestino= async (req,res)=>{
  try {
    const { monedaOrigen, monedaDestino } = req.params;
    const transacciones = await Transaccion.find({ monedaOrigen, monedaDestino });
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las transacciones' });
  }
}
module.exports = transaccionCtrl;