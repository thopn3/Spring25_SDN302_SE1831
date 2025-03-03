const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'Email is required']
    },
    password: {type: String, required: [true, 'Password is required']},
    phone: Number,
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

customerSchema.pre("save", async function(next){
    if(!this.isModified("password")) 
        return next();

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("Customer", customerSchema);