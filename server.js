const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const port = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.render('home');
})


// set Template engines
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log(`server running on port : ${port}`);
})