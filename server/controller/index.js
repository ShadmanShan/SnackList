let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next)=>{
  res.render('index', { 
    title: 'Home Page'
  });
}

module.exports.displayAboutPage = (req, res, next)=>{

  res.render('index', { title: 'About Us Page' 
});
}

module.exports.displayProductsPage = (req, res, next)=> {
  res.render('index', { title: 'Products Page' 
});
}

module.exports.displayServicesPage = (req, res, next)=> {
  res.render('index', { title: 'Services Page' 
});
}

module.exports.displayContactUsPage = (req, res, next)=> {
  res.render('index', { title: 'Contact Us Page' 
});
}