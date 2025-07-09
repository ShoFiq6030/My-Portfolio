import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

export default mongoose.models.Signup || mongoose.model("Signup", SignupSchema);
