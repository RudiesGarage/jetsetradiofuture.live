const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    JSRF_PATH: process.env.JSRF_PATH || "/home/dem/www/jsrfl_git"
}
