var express = require('express');
var app = express();
var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList'])

// //Contact Schema
// var Schema = mongoose.Schema;
// var contactSchema = new Schema({
//   name:  String,
//   email: String,
//   number:   String
// });
// //Contact Model
// var Contact = mongoose.model('Contact', contactSchema);
//
// //connect to mongolab
// mongoose.connect('mongodb://admin:password@ds051923.mongolab.com:51923/list-db');
//
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('connected', function(someData){
//  console.log('We are connected to MongoDB')
// });

//Tells our app where to find our static pages
app.use(express.static(__dirname + '/public'));

//GET request from $http.get /contactList route
app.get('/contactList', function(req,res){
  console.log('GET requested received');

  //retrieve all contacts from mongoDB
  db.contactList.find(function(err,docs){
    console.log(docs);
    res.json(docs)
  })

})

app.listen('3000');
console.log('Listening to local host 3000');
