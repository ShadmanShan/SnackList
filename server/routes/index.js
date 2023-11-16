let express = require('express');
let router = express.Router();
let indexController =require('../controller/index');



/* GET home page. */
router.get('/', indexController.displayHomePage);



router.get('/about',indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contactus', indexController.displayContactUsPage);

module.exports = router;
