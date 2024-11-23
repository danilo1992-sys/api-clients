import mongoose from 'mongoose'

const Clients = mongoose.model('client', {
  name: { type: String, required: true, minlength: 3 },
  address: { type: String, reuqired: true, minlength: 3 },
  phone: { type: Number, required: true, minlength: 10 }
})

export default Clients
