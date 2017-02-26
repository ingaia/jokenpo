require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");

let api = express();
mongoose.connect(`mongodb://mongo:27017`);

api.listen(process.env.API_PORT, () => console.log(`API listening on port ${process.env.API_PORT}!`) );
