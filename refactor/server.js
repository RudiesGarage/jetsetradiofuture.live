// Main Server Code 
const config = require('./config.js');
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


console.log(`NODE_ENV=${config.NODE_ENV}`);
app.listen(config.PORT, () => console.log(`Server Listening on Port ${config.PORT}`));