const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    user_Id: {
        type: String,
        required: true
    },

    first_Name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_Number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model('user',userSchema);