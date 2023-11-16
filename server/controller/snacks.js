var express = require("express");
var router = express.Router();

let Snacks = require("../models/snacks");


module.exports.displaySnacklist = (req, res, next) => {
  Snacks.find((err, Snacklist) => {
    if (err) {
      return console.error(err);
    }
    else
    {
        console.log(Snacklist);
    }
});
};


module.exports.processAddPage= (req, res, next)=>
  

Snacks.create(newSnacks).then(()=>{
  res.redirect('/snackslist')
})

('/add', async (req, res, next)=>{
  try{
      res.render('snacks/add', {
          title: 'Add Snacks'
      })
  }
  catch(err)
  {
      console.error(err);
      // Handle error
      res.render('snacks/list', {
          error: 'Error on server'
      });
  }
});

module.exports.performDelete= router.get('/delete/:id', async (req, res, next)=>{});

router.get('/delete/:id',(req,res,next)=>{

});
