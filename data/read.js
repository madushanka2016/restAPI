const user = require("./../module/user");
class Read{
    async friends(id){
        try{
            const friends = await user.find(
                {_id:id},
                {friends:-1}
            ).populate("friends",["name"]);
            return friends;
        }catch(e){
            return null;
        }
    }
    async user(id){
        try{
            const userResult = await user.find({_id:id}).populate("friends",["name"]);
            return userResult;
        }catch(e){
            return null;
        }
    }
    async users(){
        try{
            const userResult = await user.find().sort({name:1});
            return userResult;
        }catch(e){
            return null;
        }
    }
}
module.exports = Read;