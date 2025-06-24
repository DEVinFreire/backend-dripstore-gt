require('dotenv').config();
require('./database');

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json({ limit: '50mb' }));
  }

  routes() {
    this.server.use('/v1/user', userRoutes);
    this.server.use('/v1/category', categoryRoutes);
    this.server.use('/v1/product', productRoutes);
  }
}

module.exports = new App().server;