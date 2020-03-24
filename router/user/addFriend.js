const Add = require('./../../data/add');
const addFriend = (app) => {
    app.post('/user/:id/friend' ,async (req,res)=>{
        const add = new Add();
        const addResult =await add.addFriend(req.body.friendId , req.params.id)
        if(addResult){
            return res.json({"Status":"success","StatusDetails":"Add friend"});
        }else{
            return res.json({"Status":"error","StatusDetails":"Add friend fail"});
        }
    });
}
module.exports = addFriend;