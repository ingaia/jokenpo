require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");

let api = express();
mongoose.connect(`mongodb://mongo:27017`);

const routes = require('./routes/index');
api = routes(api);

api.listen(process.env.API_PORT, () => console.log(`API listening on port ${process.env.API_PORT}!`) );
