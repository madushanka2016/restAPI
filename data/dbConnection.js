const mongoose = require('mongoose');
const Connect = () => {
    try{
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        mongoose.connect("mongodb+srv://madushanka:Kahawa2016@cluster0-jgwmg.mongodb.net/mobile?retryWrites=true&w=majority");
        return true;
    }catch(e){
        return false;
    }
}
module.exports = Connect;