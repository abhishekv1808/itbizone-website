const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    fullName : {type :String, required:true},
    email : {type:String, required : true},
    mobileNumber : {type:String, required : true},
    company : {type:String, required : true},
    service : {type:String, enum : ['Website-Development', 'Graphic-Design', 'Digital-Marketing', 'Other', 'IT-Consulting'], required : true},
    description : {type:String, required : true},
    timeline : {type:String, enum : ['asap', '1-month', '2-3-months', '3-6-months', '6-plus-months', 'just-exploring']}

});

module.exports = mongoose.model('ContactForm', contactSchema);