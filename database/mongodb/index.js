const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/product')
.then((console.log('product database'))
);

const productSchema = mongoose.Schema({
    name: String,
    price:Number,
    imageUrl: String, 
    options: {
        promotion: Number,
        verified: Boolean, 
        deliveryCost: Number, 
        Available:Boolean,
        noOption: {
            type: String, 
            default: 'no options available'
           
        }

    }
    
})


const product = mongoose.model('Products', productSchema);
module.exports =product