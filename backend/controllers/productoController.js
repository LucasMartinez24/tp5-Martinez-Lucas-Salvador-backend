const Producto = require('../models/producto');
const productoCtrl = {}
productoCtrl.getProducts = async (req, res) => {
  var productos = await Producto.find();
  res.json(productos);
}
productoCtrl.createProduct = async (req, res) => {
  var producto = new Producto(req.body);
  try {
    await producto.save();
    res.json({
      'status': '1',
      'msg': 'Producto guardado.'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando operacion.'
    })
  }
}
productoCtrl.getProduct = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.json(producto);
}
productoCtrl.editProd = async (req, res) => {
  const prod = new Producto(req.body);
  try {
    await Producto.updateOne({ _id: req.body._id }, prod);
    res.json({
      'status': '1',
      'msg': 'Producto updated'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}
productoCtrl.deleteProd = async (req, res) => {
  try {
    await Producto.deleteOne({ _id: req.params.id });
    res.json({
      status: '1',
      msg: 'Producto removed'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error procesando la operacion'
    })
  }
}
module.exports = productoCtrl;