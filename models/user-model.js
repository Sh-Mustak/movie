import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    termsAccepted: { type: Boolean },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
