const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

// app.get('/',(req,res)=>{
//     return res.send({
//         msg:"Hello"
//     })
// })

app.get('/',(req,res)=>{
    return res.sendFile(__dirname +'/public/templates/index.html')
})














app.use(express.static(path.join(__dirname,'public')))













app.listen(process.env.PORT,()=>{
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`)
})