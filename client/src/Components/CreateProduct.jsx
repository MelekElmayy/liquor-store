import React, {useState} from 'react'
import UpdateProduct from './UpdateProduct.jsx'
import axios from 'axios'
export default function CreateProduct({ setDep , dep, changeView}) {
   const [name, setName] = useState('')
   const [price, setPrice]= useState(0)
   const [imageUrl, setImageUrl]= useState('')




   const handlepost = async () => {

    try {
      const response = await axios.post("http://localhost:3000/api/products/add", {name,price,imageUrl})
      console.log(response)
      setDep(!dep)
      

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='create-update'>
    <div className='create-Div'>
        <div className='createTitle'>Create Product</div>
        <h2>name</h2>
        <input  onChange={(e)=> {setName(e.target.value)}}/>
        <br />
        <h2>price</h2>
        <input  onChange={(e)=> {setPrice(e.target.value)}}/>
        <br />
        <h2>imageUrl</h2>
        <input  onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <br />
        <br />
        <button className='Create-button' onClick={()=> {
        handlepost() 
        changeView('all')
       
         // this is my body (in my app.jsx)
        }
        }>click to add</button>
       
    
    </div>

    </div>

  )
}
