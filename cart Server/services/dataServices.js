//import db
const db=require('./db');



//get all products details from db

const getProducts=()=>{
   return db.Product.find(). then(
       (result)=> {
       if(result){
        return{
            status:true,
            statusCode:200,
            products:result
        }
       }
       else{
        return{
            status:false,
            statusCode:402,
            message:'Product not found'
        }
       }
    }
    )  
}



//addtowishlist details store to db

const addtowishlist=(id,title,price,image,description)=>{
    //next step:create a new collection in mongodb -create a model
   return db.Wishlist.findOne({id}).then(
   
        (result)=> {
            if(result){
             return{
                 status:false,
                 statusCode:401,
                 message:'Product already added '
             }
            }
            else{
const newProduct= new db.Wishlist({
    id,title,price,image,description
})
newProduct.save()
return{
    status:true,
    statusCode:200,
    message:'Product added Successfully'
}
            }
    }
   )

}

//get  wishlist products details from db

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=> {
        if(result){
         return{
             status:true,
             statusCode:200,
             products:result
         }
        }
        else{
         return{
             status:false,
             statusCode:402,
             message:'Wishlist is Empty'
         }
        }
     }
     )  
 }


//delete the wishlist product from db
const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=> {
            if(result){
             return{
                 status:true,
                 statusCode:200,
                 products:result,
                 message:"Product removed Successfully"
             }
            }
            else{
             return{
                 status:false,
                 statusCode:402,
                 message:'Wishlist is Empty'
             }
            }
         }
    )
}



module.exports={
    getProducts,
    addtowishlist,getwishlist,
    deletewish
}