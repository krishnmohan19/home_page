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

    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
        //specify the length for the new string to be generated  
    var string_length = 20;  
    var randomstring = '';  

        //put a loop to select a character randomly in each iteration  
    for (var i=0; i<string_length; i++) {  
        var rnum = Math.floor(Math.random() * chars.length);  
        randomstring += chars.substring(rnum,rnum+1);  
    }  
    const data={
        token:randomstring
    }
    res.send(data);
})

app.listen(9000,()=>{
   console.log("server running on port 9000");
})