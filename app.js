const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req,res)=>{
    return res.send({
        msg:"Hello"
    })
})




























app.listen(process.env.PORT,()=>{
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`)
})