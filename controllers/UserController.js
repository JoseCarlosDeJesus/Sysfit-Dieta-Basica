const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
// lista todos usuarios
     async show(req, res)
    {
        let users = await User.find();
        return res.json(users);
    }, 
  //lista com filtro "email"
     async index(req,res)
    {
        let users = await User.find(
          { email : req.query.email}
                                   );
        return res.json(users);
    },
  // adiciona usuario
  async store(req, res)
     {
        const user =  await User.create(req.body);

        return res.json(user);
     }
 
};