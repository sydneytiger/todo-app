const todoItem = require('../models/todo-item');

module.exports = (req, res, next) => {
  try{
    todoItem.remove({ 'user.userName': req.body.user.userName }, (err, offer) => {
      if (err) throw err;
      item = new todoItem(req.body);
      item.save((err, data) => {
        if (err) throw err;
        next();
      });
    })
  }catch(e){
    console.log(e);
    return res.status(500).send(e);
  }
};