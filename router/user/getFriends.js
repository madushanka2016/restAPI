const Read = require('./../../data/read');
const getFriends = (app) => {
    app.get('/user/:id/friends' ,async (req,res)=>{
        const read = new Read();
        const friends =await read.friends(req.params.id);
        if(friends){
            return res.json({"Status":"success","friends":friends});
        }else{
            return res.json({"Status":"error","StatusDetails":"fail"});
        }
    });
}
module.exports = getFriends;