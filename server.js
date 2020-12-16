const express = require('express');
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const MONGO_URI = require("./connectionString");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

if (!MONGO_URI) {
    console.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  throw new Error('Provide please a MongoDB Atlas URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB Atlas!'))
    .on('error', error => console.log('Error connecting to MongoDB Atlas:', error));

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});

module.exports = app;
