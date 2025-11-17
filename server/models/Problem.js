import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    tags: [
      {
        type: String,
      },
    ],

    inputExample: {
      type: String,
      required: true,
    },

    outputExample: {
      type: String,
      required: true,
    },

    constraints: {
      type: String,
    },

    starterCode: {
      type: String,
      required: true,
    },

    solution: {
      type: String,
      required: true,
    },

    testCases: [
      {
        input: String,
        output: String,
      },
    ],
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;
