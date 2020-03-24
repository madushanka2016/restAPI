const Read = require('./../../data/read');
const getUsers = (app) => {
    app.get('/user' ,async (req,res)=>{
        const read = new Read();
        const users =await read.users();
        if(users){
            return res.json({"Status":"success","users":users});
        }else{
            return res.json({"Status":"error","StatusDetails":"fail"});
        }
    });
}
module.exports = getUsers;