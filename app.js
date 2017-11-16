//console.log('hey');
/*setTimeout(function(){
  console.log('3 seconds have passed');
},9000);*/

/*var time=0;

var timer = setInterval(function(){
  time +=2;
  console.log(time + ' seconds have passed');
  if(time> 5){
    clearInterval(timer);
  }
},2000);
*/

/*console.log(__dirname);
console.log(__filename);
*/

//require, exports

// normal funtion statement

/*
function sayHi(){
  console.log('hi');
}

sayHi();
*/
//callback function

/*function callFunction(fun){
  fun();
}

// function expression
var sayBye= function(){
  console.log('bye');
};

sayBye();

callFunction(sayBye);
/*
var stuff = require('./stuff');

console.log(stuff.counter(['bla', 'cry', 'mew']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,4));
*/
// NODE EVENT EMITTER------------------------------------

/*var events= require('events');

/*var myEmitter= new events.EventEmitter();

myEmitter.on('someEvent', function(a,b){
  //return `The sum is ${a+b}`;
  console.log(`${a+b}`);
});

myEmitter.emit('someEvent',(5,6));  */
/*
var util= require('util');

var Person= function(name){
  this.name= name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var thomas = new Person('thomas');
var ben = new Person('ben');

var people= [james, thomas, ben];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + " said " + msg);
  });
});

james.emit('speak', 'hola');
ben.emit('speak','como estas');
*/

// --------- READING AND WRITING FILES (fs)-------------------
/*
var fs= require('fs');

//var readMe= fs.readFileSync('readMe.txt', 'utf8'); //read file Sunc-> 'sync' because it is a synchronus function, if no 'sync' is mentioned then it is asynchronous function and a callback function has to be mentioned
fs.readFile('readMe.txt', 'utf8', function(err, data){
  //console.log(data);
  fs.writeFile('writeMe.txt', data);
});
//fs.writeFileSync('writeMe.txt', 'dibbi dubba do');

//console.log(readMe);

console.log('text');
*/
// -------------creating and removing directories ------------------------


//var fs = require ('fs');
/*
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8',  function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
*/
// simply removing the stuff folder, will throw an error because stuff folder was not empty,
// the files inside the folders are removed first and as a callback function, the folder is also removed
/*
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
*/

//------------------------ creating a server---------------------------------------------
var http = require ('http');

var server = http.createServer(function(req, res){
  console.log('request was made:' + req.url);
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('hey ninja');
});

server.listen(3000,'127.0.0.1');
console.log('yo yo yo 3000');


//---------------READABLE STREAMS---------------

var http= require ('http');
var fs= require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  console.log(chunk);
});
