const mongoose = require("mongoose")
const validator = require("validator")
mongoose.connect("mongodb://localhost:27017/signup", {useNewUrlParser:true, useUnifiedTopology: true})

const customerSchema = new mongoose.Schema(
    {
        country: String,
        fname: String,
        lname: String,
        email: {type: String,
            trim:true,
            lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is not valid!')
            }
        }},
        password: {type: String, minlength: 8},

        cpassword: String,
        address: String,
        mobile: String,
        city: String,
        state: String,
        postalcode: String,
    }
)
module.exports  =  mongoose.model("Customer", customerSchema)
