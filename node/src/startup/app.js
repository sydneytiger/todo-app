const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const itemRouter = require('../routes/itemRouter');
const rootRouter = require('../routes/rootRouter');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/item', itemRouter);
app.use('/', rootRouter)

module.exports = app;