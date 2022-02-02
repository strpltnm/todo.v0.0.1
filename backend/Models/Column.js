import mongoose from 'mongoose'

const Column = new mongoose.Schema({
 id: {type: String, required: true},
 name: {type: String, required: true}
})

export default mongoose.model('Column', Column);