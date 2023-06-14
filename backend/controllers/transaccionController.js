const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}
transaccionCtrl.getTransacciones = async (req, res) => {
  var transacciones = await Transaccion.find();
  res.json(transacciones);
}
transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
  try {
    await Transaccion.save();
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
transaccionCtrl.editTransaccion = async (req, res) => {
  const trans = new Transaccion(req.body);
  try {
    await Transaccion.updateOne({ _id: req.body._id }, trans);
    res.json({
      'status': '1',
      'msg': 'transaccion updated'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}
transaccionCtrl.deleteTransaccion = async (req, res) => {
  try {
    await Transaccion.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'transaccion removed'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}
module.exports = transaccionCtrl;