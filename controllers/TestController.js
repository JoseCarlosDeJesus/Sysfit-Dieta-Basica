// index, show, store, udpdate , destroy
module.exports = {
     async show(req, res)
    {
      const users = [
       {name: 'Jones', email: 'jones@gmail.com'}
      ]
        return res.json(users);
    }
};