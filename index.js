const expess = require('express')
const app = expess()
const PORT = 4000

app.listen(PORT, ()=>{
    console.log('API Listening on PORT ${PORT}')
})

app.get('/',(req,res)=>{
    res.send('This is my API running....')
})

app.get('/about',(req,res)=>{
    res.send('This is my about route')
})

module.expess = app
