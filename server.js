const express=require('express')
const cors=require('cors')
const app=express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hellow World");
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;

    if(!email && !password){
        res.send("Missing Email and Password");
    }
    if(!password){
        res.send("Missing Password");
    }
    if(!email){
        res.send("Missing Email");
    }
   
    res.send("hash");
})

app.listen(9000,()=>{
   console.log("server running on port 9000");
})