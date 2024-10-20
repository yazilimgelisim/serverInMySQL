// Project for necessary package
const express = require('express');
const {engine} = require('express-handlebars');
const {join} = require('path');


//? Default variable
const app = express();
const PORT = process.env.PORT || 3000;


//? DB Process
const {conn} = require(join(__dirname, 'db.js'));
conn();


//? Project for necessary Middleware
app.use(express.static(join(__dirname, 'public')));



//? Template engine setting
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));



//? indexRouter including area
const indexRouter = require(join(__dirname, 'routes', 'indexRouter.js'));



//? indexRouter usage area
app.use('/', indexRouter);


//? Server listening port area
app.listen(PORT, ()=>{
  console.log(`Server is running http://127.0.0.1:3000`);
})



