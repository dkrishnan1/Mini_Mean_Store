var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
var path = require('path');
// connect to the database
mongoose.connect('mongodb://localhost/Customer_Order');
// specify the path to all of the models
var models_path = path.join(__dirname, '../models');
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
