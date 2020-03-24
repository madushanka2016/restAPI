const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())
const port = 5000;
app.use(express.json({
    extended:true
}));
const server = app.listen(port , () => {
    console.log("Connected")
});
//db connection
const databaseConnection = require('./data/dbConnection');
console.log(databaseConnection())


