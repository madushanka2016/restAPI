const Add = require('./../../data/add');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const addUser = (app) => {
    app.post('/user/', upload.single('image'),async (req , res) => {
        const user={
            name: req.body.name,
            age: req.body.age,
            image:req.file.buffer,
            gender:req.body.gender            
        }
        const add = new Add();
        const addUserResult =await add.user(user);
        if(addUserResult){
            return res.json({"Status":"success","user":addUserResult});
        }else{
            return res.json({"Status":"error","StatusDetails":"add user fail"});
        }
    });
}
module.exports = addUser;