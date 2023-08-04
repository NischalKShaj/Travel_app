const express = require('express')
const app = express();
const path = require('path')
const session = require('express-session')




const loginRouter = require('./routes/login')
const homeRouter = require('./routes/home')
const signupRouter = require('./routes/signup')

app.set('view engine', 'ejs')
app.set('views','views')


app.use('/', homeRouter)
app.use('/logout', loginRouter)
app.use('/signup', signupRouter)




app.use((req, res)=>{
    res.status(404).send("Page not found ")
})



app.listen(3000, ()=>{
    console.log("server running.......");
})