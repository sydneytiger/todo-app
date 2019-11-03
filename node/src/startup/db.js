const mongoose = require('mongoose');

module.exports = () => {
    const db = process.env.NODE_ENV === 'production' ?
        'mongodb://mongo:27017/todo-db'
        : 'mongodb://localhost:27017/todo-db';

    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => { console.log(`Connected to database ... ${mongoose.connection.readyState}`)})
        .catch(err => { console.log(err); });
}