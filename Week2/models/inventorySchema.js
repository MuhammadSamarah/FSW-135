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
    }
})
    module.exports = mongoose.model('Inventory', InventorySchema)