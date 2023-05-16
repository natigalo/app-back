import { schema, model, Types, Schema } from 'mongoose'
let collection = 'users'
let schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: numeber, required: true },
    online: { type: Boolean, required: true },

}, {
    timestamps: true,

})
let User = model(collection, Schema)
export default user 