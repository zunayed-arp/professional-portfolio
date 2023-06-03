const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const PORT = 3000;



app.get('/',(req,res)=>{
    res.status(200);
    res.send('Welcome to base url for server');
});


app.listen(PORT,(error)=>{
    if(!error){
        console.log('Server running successfully and app is listeing to port ' + PORT);
    }
    else{
        console.log("Server has error",error)
    }
})