const Delete = require('./../../data/delete');
const deleteUser = (app) => {
    app.delete('/user/:id' ,async (req,res)=>{
        const delet =  new Delete();
        const deleteUserResult = delet.user(req.params.id);
        if(deleteUserResult){
            return res.json({"Status":"success","user":"user successfull delete"});
        }else{
            return res.json({"Status":"error","StatusDetails":"delete user fail"});
        }
    });
}
module.exports = deleteUser;