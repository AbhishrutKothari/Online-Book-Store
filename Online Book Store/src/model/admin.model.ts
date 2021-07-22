import mongoose, { Document, Schema } from "mongoose";

interface Admin extends Document {
    email: String;
    password: String;
}

let adminSchema: Schema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

let AdminModel = mongoose.model<Admin>("Admin", adminSchema);
export default AdminModel;
