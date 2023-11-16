let mongoose = require('mongoose');

let snackModel = mongoose.Schema({
  name: String,
  producer: String,
  Founded: String,
  description: String,
  price: Number
},
{
  collection:"snacks"
}

);
module.exports = mongoose.model('Snack',snackModel);

