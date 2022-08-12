const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb+srv://JoseCarlos:1@cluster0.cijws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
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
// lista user, filtrando por email
// ex: /user/buscaemail/?email=vaguetti@gmail.com
app.get('/user/buscaemail/*', userController.index);

// exclui user
//req.params  = route params (post, put, delete)
app.delete('/user/:id', userController.destroy);

// altera user
app.put('/user/:id', userController.update);


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

/* categoria */

const CategoryController = require('./controllers/CategoryController');
const { isValidId } = require('./helpers/id.helper');

 app.get('/category', (_, res) =>
    res.json(CategoryController.getCategoriesList())
  );

 app.get('/category/:categoryId', (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid Category ID',
      });
    }

    res.json(CategoryController.getCategoryById(categoryId));
  });
/* fim dos endpoints de categoria*/

/*foods*/

const FoodController = require('./controllers/FoodController');

 app.get('/food', (_, res) =>
    res.json(FoodController.getFoodList())
  );

app.get('/food/:foodId', (req, res) => {
    const { foodId } = req.params;

    if (!isValidId(foodId)) {
      res.status(400).json({
        message: 'Invalid Food ID',
      });
    }

    res.json(FoodController.getFoodById(foodId));
  });

 app.get('/category/:categoryId/food', (req, res) => {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      res.status(400).json({
        message: 'Invalid category id',
      });
    }

    res.json(FoodController.getFoodByCategoryId(categoryId));
  });

/* fim dos endpoints de foods*/

app.get('/api/v1/cadastro', (req, res) => {
    res.send('cadastro')
});

app.listen(3000, () => console.log('server started'));

