const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

// Configuración
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/contacts", require("./routes/contact.routes"));

module.exports = app;