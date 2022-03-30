const dotenv = require('dotenv');
const path = require('path');

// Get local Path of .env file
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

// Export DEV/PROD Variables 
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    JSRF_PATH: path.resolve(__dirname, `..`)
}