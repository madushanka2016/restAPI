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


/// routers
require('./router/user/addUser')(app);
require('./router/user/addFriend')(app);
require('./router/user/deleteUser')(app);
require('./router/user/getFriends')(app);
require('./router/user/getUser')(app);
require('./router/user/getUsers')(app);

app.use((req,res) => {
    return res.json({"Status":"error","StatusDetails":"Request not found"});
});