const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const MONGO_URI = require("./connectionString")

const app = express();

if (!MONGO_URI) {
    console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  throw new Error('Provide please a MongoDB Atlas URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB Atlas!'))
    .on('error', error => console.log('Error connecting to MongoDB Atlas:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
