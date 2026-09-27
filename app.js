const express=require('express')
const app=express()
app.get('/',(req,res)=>res.send('Ghazi Foode شغال ✅'))
app.listen(process.env.PORT||10000)
