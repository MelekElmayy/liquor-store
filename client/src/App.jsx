import React, { useState, useEffect } from "react";


import axios from "axios";
import AllProducts from "./Components/allProducts.jsx"; /// .jsx is important !
import CreateProduct from "./Components/CreateProduct.jsx"; /// .jsx is important !




const App = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [dep, setDep] = useState(false);
 
 

  //// useeffect ////// 
  useEffect(() => {
    fetch();

  }, [dep]);
   //// useeffect ////// 

  const fetch = async () => {
    const response = await axios.get("http://localhost:3000/api/products/getAll");
    setData(response.data);
  };

  const changeView = (v) => {
    setView(v);
  };

  

  // const handlepost = (body) => {
  //   axios
  //     .post("http://localhost:3000/api/products/add", body)
  //     .then((data) => {
  //       setDep(!dep); /// toggle the change here
  //       changeView("all");
  //     })
  //     .catch((err) => console.log(err));
  // };






  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/products/${id}`)
      .then((data) => {
        setDep(!dep); /// toggle the change here too
        console.log({ data });
      })
      .catch((err) => console.log(err));
  };


  const handelUpdate = (id,body) => {
        axios.put(`http://localhost:3000/api/products/${id}`, body)
        .then(data => {
          setDep(!dep);  /// toggle the change here too
          changeView("all")
          console.log({data})

      })
      .catch((err)=> console.log("update error in the front end 😑",err))
  }

  return (
    <div className="papaMama" >
      <h1 className="title">Liquor Store</h1>
      <ul className="switch">
        <button onClick={() => changeView("all")}>All Products</button>
        <button onClick={() => changeView("create")}>Create Product</button>
      </ul>

      {view === "all" ? <AllProducts data={data} handleDelete={handleDelete} handelUpdate={handelUpdate}/> : <CreateProduct handelUpdate={handelUpdate} setDep={setDep} dep={dep} changeView={changeView}/> }
      
    
    </div>
  );
};

export default App;
