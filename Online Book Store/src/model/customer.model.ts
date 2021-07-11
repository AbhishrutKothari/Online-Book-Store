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
        
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    phoneNumber: {
        type: String,
        
    },
    password: {
        type: String,
        
    }
});

let UserModel = mongoose.model<Customer>("Customer", customerSchema);
export default UserModel;
