import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        summary: {
            type: String,
            required: true,
            trim: true,
        },
        problem: {
            type: String,
            required: true,
            trim: true,
        },
        solution: {
            type: String,
            required: true,
            trim: true,
        },
        architecture: {
            type: String,
            required: true,
            trim: true,
        },
        technologies: {
            type: [String],
            required: true,
        },
        lessonsLearned: {
            type: String,
            trim: true,
        },

        futureImprovements: {
            type: String,
            trim: true,
        },

        githubUrl: {
            type: String,
            trim: true,
            match: /^https?:\/\/.+/,
        },

        liveUrl: {
            type: String,
            trim: true,
            match: /^https?:\/\/.+/,
        },

        thumbnailUrl: {
            type: String,
            trim: true,
            match: /^https?:\/\/.+/,
        },

        featured: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },
    },
    {
        timestamps:true,
    }
);

const Project = model("Project", projectSchema);


export default Project;