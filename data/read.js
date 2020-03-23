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
    
}
module.exports = Read;