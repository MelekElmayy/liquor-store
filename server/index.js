const express = require("express");
let app = express();
const PORT = 3000;
const ProductRoutes = require('./routers/index')
const cors = require('cors')     //////// a very important middleware to link the server path with the front path "also !!!!! : need to do (npm i cors)"
require('../database/mongodb/index')
app.use(cors())                            //// "Invoke" the cors here 
app.use(express.json())
app.use('/api/products', ProductRoutes)

app.use(express.static(__dirname + "/../client/dist")); /// what is this ?? 

app.get('/', (req,res) => {
  res.sendFile('hellow from the server')
})



app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
