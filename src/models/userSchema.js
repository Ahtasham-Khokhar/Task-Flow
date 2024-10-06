const { unique } = require('jquery');
const mongoose = require('mongoose');

const { type } = require('os');
const validator = require('validator');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    cname:{
        type:String,
        required: true
    },
    adress:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    phone:{
        type:Number,
        min: [11, 'Must be at least 11, got {VALUE}'],
        
    },
    ainfo:{
        type:String,
    }
});
const User = mongoose.model('ContactData',userSchema);
module.exports= User;
