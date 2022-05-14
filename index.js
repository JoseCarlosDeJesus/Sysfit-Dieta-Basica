const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
//======================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//========================================
const userController = require('./controllers/UserController');
// adiciona user
app.post('/user', userController.store);
// lista user
app.get('/user', userController.show);
//=========================






const testController = require('./controllers/TestController');

app.get('/userscontroller', testController.show);

app.get('/', (req, res) => {
res.send('Alô REST API');
});


app.get('/api/echo/:param*', (req, res) => {
res.send(req.params.param);
});

app.get('/api/echodbl/:param1/:param2', (req, res) => {
res.send(req.params.param1 + ', ' + req.params.param2);
});

app.get('/api/echoquery/*', (req, res) => {
res.send(req.query.q);
});

app.get('/api', (req, res) => {
res.send('API ativa !!!');  
});

const users = [
  {name: 'Jones', email: 'jones@gmail.com'},
  {name: 'Henrique', email: 'henrique@hotmail.com'}
]

app.get('/users', (req, res) => {
res.json(users);
});

app.post('/api/echobody', (req,res) => {
  res.send(req.body);
});


app.listen(3000, () => console.log('server started'));

