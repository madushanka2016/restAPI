const user = require("./../module/user");
class Delete{
    async user(id){
        try{
            const deleteResult = await user.deleteOne({_id:id});
            return deleteResult;
        }catch(e){
            return null;
        }
    }
}
module.exports = Delete;