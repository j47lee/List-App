var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var mongojs    = require('mongojs'); //communicate with mongoDB
var db         = mongojs('contactList',['contactList'])
var app        = express();

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
//Use bodyparser to parse through body data received from form
app.use(bodyParser.json())

//GET request from $http.get /contactList route
app.get('/contactList', function(req,res){
  console.log('GET requested received');

  //retrieve all contacts from mongoDB
  db.contactList.find(function(err,docs){
    console.log(docs);
    res.json(docs)
  })
})

//POST request from $http.post
app.post('/contactList', function(req,res){
  console.log(req.body);
  //Doing two things: saves form data into db and the res.json sends the data to controller
  db.contactList.insert(req.body, function(err, doc){
    res.json(doc)
  })
})

app.delete('/contactList/:id', function(req,res){
  var id = req.params.id;
  console.log(id);
  db.contactList.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
    res.json(doc);
  })
})

app.listen('3000');
console.log('Listening to local host 3000');
