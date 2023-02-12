//import mongoose
const mongoose = require('mongoose');

//define the connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connect to mongodb');
})

//create a model for the products(collection)

const Product=mongoose.model('Product',{
    //schema creation 
    id:Number,
    title:String,
    Price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})


//create a new collection in mongodb - Create a model
const Wishlist=mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String
})

module.exports={
    Product ,
    Wishlist              //export model
}