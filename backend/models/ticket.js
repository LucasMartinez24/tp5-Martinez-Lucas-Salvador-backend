const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  precioTicket: {type:Number,required:true},
  categoriaEspectador: { type: String, enum: ['e', 'l'],required:true },
  fechaCompra: {type:String,required:true},
  espectador: { type: Schema.Types.ObjectId, ref: 'Espectador' ,required:true}
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;