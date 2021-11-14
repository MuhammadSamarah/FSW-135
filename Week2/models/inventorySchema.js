const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const InventorySchema = new Schema({
    Name: { 
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    }
})
    module.exports = mongoose.model('Inventory', InventorySchema)