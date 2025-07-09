import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    companyName: String,
    designation: String,
    dateline: String,
    location: String,
}, { timestamps: true });

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
