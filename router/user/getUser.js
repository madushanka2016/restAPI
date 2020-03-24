const Read = require('./../../data/read');
const getUser = (app) => {
    app.get('/user/:id' ,async (req,res)=>{
        const read = new Read();
        const user =await read.user(req.params.id);
        if(user){
            return res.json({"Status":"success","user":user});
        }else{
            return res.json({"Status":"error","StatusDetails":"cannot find user"});
        }
    });
}
module.exports = getUser;