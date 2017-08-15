const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


/*app.get('/', function(req, res){
	res.send('Hello world!');
});

const server = app.listen(8081, function(){
	const host = server.address().address;
	const port = server.address().port;

	console.log(`Online at http://${host}:${port}`);
});*/

const hostname = 'localhost';
const port = 3000;

/*app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/:id', function(req, res){
	const name = req.params.id;
	res.send(`Hello ${name}`);
});*/

/*app.get('/file', function(req, res){
	const filePath = path.join(__dirname, '/public/index.html');
	res.sendFile(filePath);
});*/

app.use(bodyParser.json());

app.post('/add', function(req, res){
	
});

app.listen(port, hostname, function(){
	console.log(`Server at http://${hostname}:${port}/`);
});