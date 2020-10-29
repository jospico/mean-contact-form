const mongoose = require('mongoose')

//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
  .then( () => console.log('MongoDB Conectado Exitosamente...') )
  .catch(err => console.log(err));