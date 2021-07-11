import mongoose, { Document, Schema } from "mongoose";

interface Customer extends Document {
    custId:Number;
    name: String;
    email: String;
    phoneNumber: String;
    password: String;
    
}

let customerSchema: Schema = new Schema({
    custId:{
        type: Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let CustomerModel = mongoose.model<Customer>("Customer", customerSchema);
export default CustomerModel;
