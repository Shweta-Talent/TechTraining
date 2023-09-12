const mongoose=require('mongoose')


const Schema = mongoose.Schema;

const newUser =new Schema({

    email : {
        type: String,
        require :true,
        unique: true
    },

    password : {
        type: String,
        require :true
    },
    mobile :{
    type:Number,
    require:true,
    }
})
const {number:mobile}=newUser;

console.log(number)

module.exports = mongoose.model('User',newUser)