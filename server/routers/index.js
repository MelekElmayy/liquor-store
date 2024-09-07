const {getAll,getOne,addProduct,UpdateProduct,deleteProduct}=require("../controllers")
const express =require("express")
const Router= express.Router()



Router.get('/getAll',getAll)
Router.get('/getOne/:id',getOne)
Router.post('/add',addProduct)
Router.put('/:id',UpdateProduct)
Router.delete('/:id',deleteProduct)


module.exports=Router