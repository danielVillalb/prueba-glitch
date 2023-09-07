let express=require('express')
let path=require('path')
let app=express();
let port=3000
app.use(express.json())
app.listen(port,()=>{
    console.log('server andando')
})
app.get(('/'),(req,res)=>{
    res.send('./index.html')
})


app.post('/user',(req,res)=>{
    const {user,password}=req.body
    console.log('datos cargados correctamente',user,password)

    res.send('este es el nombre de usuario y contrasenia'+user+password)
})