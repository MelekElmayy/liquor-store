import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function UpdateProduct({handelUpdate,id, changeView, handleShow}) {
// console.log("productttt",product._id)

    const [updateName, setupdateName] =useState('')
    const [updatePrice, setupdatePrice] =useState(0)
    const [updateImageUrl, setupdateImageUrl] =useState('')
    const [updateId,setupdateId] = useState('')


    const fetch = async () => {
      // const response = await axios.get("http://localhost:3000/api/products/getOne/"+id);
      console.log(response)
      setData(response.data);
    };

    //// useeffect ////// 
  useEffect(() => {

    fetch();

  }, []);
   //// useeffect ////// 
    

  return (
    <div className='create-Div'>
    <div className='createTitle' >Upodate Product</div>
        <h2>Enter id from database</h2>
        <input  onChange={(e)=> {setupdateId(e.target.value)}}/>
        <h2>name</h2>
        <input  onChange={(e)=> {setupdateName(e.target.value)}}/>
        <br />
        <h2>price</h2>
        <input  onChange={(e)=> {setupdatePrice(e.target.value)}}/>
        <br />
        <h2>imageUrl</h2>
        <input  onChange={(e)=>{setupdateImageUrl(e.target.value)}}/>
        <br />
        <br />
        <button className="Update-button" onClick={()=>
        {
          console.log("clickeddd")
          handelUpdate(updateId, {name:updateName,price:updatePrice,imageUrl: updateImageUrl})  
          // changeView('all')
          handleShow()
          // this is my body (in my app.jsx)
        }
        }>click to update</button>

       
    </div>
  )
}
