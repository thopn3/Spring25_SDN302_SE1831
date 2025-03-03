const mongoose = require('mongoose');
const Category = require('./category');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
        maxLength: [50, 'Name can not greater than or equal to 50 characters']
    },
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: Category, required: true}
});

module.exports = mongoose.model('Product', productSchema);

