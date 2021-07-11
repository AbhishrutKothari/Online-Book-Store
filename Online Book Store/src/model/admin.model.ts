import mongoose, { Document, Schema } from "mongoose";

interface Admin extends Document {
    name: String;
    email: String;
    phoneNumber: String;
    password: String;
}

let adminSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

let UserModel = mongoose.model<Admin>("Admin", adminSchema);
export default UserModel;
