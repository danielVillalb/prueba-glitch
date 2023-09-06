let express=require('express')
let path=require('path')
let app=express();
let port=3000
app.listen(port,()=>{
    console.log('server andando')
})
app.get(('/'),(req,res)=>{
    res.send('hola mundo')
})