var express = require("express");
var router = express.Router();


//connect with snack model

let Snacks = require("../models/snacks");
let snacksController = require('../controller/snacks')

router.get('/',snacksController,snacksController.displaySnacklist);
/*Read Operation*/

/*Get Router*/

router.get("/snacks", (req, res, next) => {
  Snacks.find((err, Snacklist) => {
    if (err) {
      return console.error(err);
    }
    else
    {
        console.log(Snacklist);
    }
});
});


/*Add operation*/
router.get("/", async (req, res, next) => {
  try{
    const Snacklist = await Snacks.find(); //< Use of await keyword
       res.render('snacks/list', {
          title: 'Snacks List', 
          Snacklist:Snacklist
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('snacks/list', {
          error: 'Error on server'
       });
    }
 });

 router.get('/add', async (req, res, next)=>{
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

router.post('/add', async (req, res, next)=>{
  try{

    let newSnacks = Snacks({

   
      "name": req.body.name,
  
      "producer":req.body.author,
  
      "Founded":req.body.published,
  
      "description": req.body.description,
  
      "price":req.body.price
    })

    Snacks.create(newSnacks).then(()=>{
      res.redirect('/snackslist')
    })
  }

  catch(err)

  {
  
    console.error(err);

    res.render('snacks/list',{
      error:'Error on server'

    });

  }

});


router.get('/edit/:id', async (req, res, next)=>{});

router.post('/edit/:id', async (req, res, next)=>{});

router.get('/delete/:id', async (req, res, next)=>{});

router.get('/delete/:id',(req,res,next)=>{

});

module.exports = router;