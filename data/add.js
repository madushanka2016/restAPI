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
    
}
module.exports = Add;