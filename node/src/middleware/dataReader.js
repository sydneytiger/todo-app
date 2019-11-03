const todoItem = require('../models/todo-item');

module.exports = (req, res, next) => {
    try{
      const userName = req.params.username;
      todoItem.find({ 'user.userName': userName }, (err, data) => {
        if (err) throw err;
        res.body = data;
        next();
      });
    }
    catch(e){
      return res.status(500).send(e);
    }
};
