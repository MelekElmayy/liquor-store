import React ,{useState} from 'react'
import UpdateProduct from './UpdateProduct.jsx';

export default function ProductDetails({e,handleDelete,handelUpdate}) {
    
  const [show, setShow] = useState(false)
const handleShow = ()=>{
  setShow(!show)
}
  const changeShow= (view)=> {
         setShow(view)
  };

  return (
      <div className='oneProduct'>
        {!show &&
          <>
          <h3 className='name'> {e.name}</h3>
          <br />
          <p className='price'> Price: {e.price} $</p>
          <br />
          <img src={e.imageUrl}/>
          <br />
          <br />
          <p>ID : {e._id}</p>
          <button onClick={()=>{
            handleDelete(e._id)
            changeShow(!show)
          }}>delete product</button> <br></br><br></br>

          <button onClick={()=> {
          changeShow(!show)
        }}>update</button>
          <br />
          <br />
          
          </>
        }
      {show && 
      <div>
        <UpdateProduct id={e._id} handleShow={handleShow} handelUpdate={handelUpdate} product={e}/>
        
      </div>
      }

      <h1></h1>
    </div>  
  )
}

