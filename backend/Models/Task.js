import mongoose from 'mongoose'

const Task = new mongoose.Schema({
 id: {type: String, required: true},
 columnId: {type: String, required: true},
 name: {type: String, required: true}
})

export default mongoose.model('Task', Task);