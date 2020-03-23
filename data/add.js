const newUser = require("./../module/user");
class Add{
    async user(user){
        try{
            const newUserResult = await newUser({
                name:user.name,
                age:user.age,
                image:user.image,
                gender:user.gender
            }).save();
            if(newUserResult){
                return newUserResult;
            }else{
                return null;
            }
        }catch(e){
            return null;
        }
    }
    async addFriend(id,friendId){
        try{
            await newUser.updateOne({_id : id},{$push:{friends:friendId}});
            await newUser.updateOne({_id : friendId},{$push:{friends:id}});
            return true;
        }catch(e){
            return null;
        }
    }
}
module.exports = Add;