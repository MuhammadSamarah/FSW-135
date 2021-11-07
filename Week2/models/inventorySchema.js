const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const InventorySchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    objectType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
    module.exports = mongoose.model('Inventory', InventorySchema)