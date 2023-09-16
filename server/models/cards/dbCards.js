import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
},
{autoIndex: true});

export default mongoose.model("Card", cardSchema);