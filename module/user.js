const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {type: String , require:true},
    age : { type: Number, required: true},
    createDate : {type:Date , default:Date.now()},
    image:{type:Buffer , default:null},
    gender:{type:String , enum:['MALE' , 'FEMALE']},
    friends:[{type:mongoose.Schema.Types.ObjectId , ref:"user"}],
});
module.exports = mongoose.model("user",userSchema);