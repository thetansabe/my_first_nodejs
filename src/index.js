const path = require('path');
const express = require('express');
const exphdb = require("express-handlebars");
const morgan = require('morgan');

const app = express()
const port = 4420

//import nhung file tinh ben trong folder public
app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('.hbs', exphdb({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views', path.join(__dirname,'resources','views'))
//__dirname la thu muc chua index.js => src

//Main
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/news', (req,res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log('Im listening to port',port)
})