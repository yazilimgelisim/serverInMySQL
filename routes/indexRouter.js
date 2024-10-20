const express = require('express');
const {join} = require('path');
const router = express.Router();


//? All routes file including area
const mainRouter = require(join(__dirname, 'mainRouter.js'));



//? All routes usage area
router.use('/', mainRouter);



router.use((req, res)=>{
  try {
    res.render('errors/404');
  } catch (error) {
    console.log(error)
    res.render('errors/404');
  }
})


module.exports = router