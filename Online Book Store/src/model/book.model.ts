import mongoose, { Document, Schema } from "mongoose";

interface Book extends Document {
    bookId: Number;
    name: String;
    author: String;
    numberOfBooks: Number;

}

let bookSchema: Schema = new Schema({
    bookId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    numberOfBooks: {
        type: Number,
        required: true,
    }
    
});

let BookModel = mongoose.model<Book>("Books", bookSchema);
export default BookModel;
