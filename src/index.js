const path = require('path');
const express = require('express');
const { exphdb } = require("express-handlebars");
const morgan = require('morgan');

const app = express()
const port = 4420

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', exphdb())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'resources','views'))
//__dirname la thu muc chua index.js => src

//Main
app.get('/', (req,res) => {
    res.send('home')
})

app.listen(port, () => {
    console.log('Im listening to port',port)
})