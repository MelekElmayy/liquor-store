const Product = require('../../database/mongodb/index')


module.exports = {
    getAll:async(req,res)=>{
        try {
          const data=await Product.find()
          res.status(200).send(data)
        } catch (error) {
            throw error
        }
        },
        getOne:async(req,res)=>{
            const {id}=req.params

            try {
              const data=await Product.findById(id)
              res.status(200).send(data)
            } catch (error) {
                throw error
            }
            },
        
        addProduct:async(req,res)=>{
            try {
            const data =req.body 
            const added=await Product.insertMany(data)

            if(added)res.status(201).send(added)

            } 
            catch (error) {
                throw error  
            }
            },

        deleteProduct:async(req,res)=>{
            try { 
                const id =req.params.id
                console.log(id);
                
         const del = await Product.deleteOne( {_id:id })  
         res.status(200).send(del)
            } catch (error) {
                throw error  
                
            }
            },

        UpdateProduct:async(req,res)=>{
            try {
                const body=req.body
                const id =req.params.id
                const upd = await Product.updateOne( {_id:id },body)  
                res.status(200).send(upd)
            }
             catch (error) {
             throw error        
         }
  }
}