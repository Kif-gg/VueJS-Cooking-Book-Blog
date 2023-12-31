const { Schema, model, Types: { ObjectId } } = require("mongoose");

// Regex complexity is not high due to nature of the project!

const recipeSchema = new Schema({
    imgUrl: {
        type: String,
        required: [true, "Image URL is required!"],
        match: [/^https?:\/\/(?:www\.)?[\w-]{3,30}\.[a-z]{2,10}(?:[\w\W]{1,300})?$/i, "URL is not valid!"]
    },
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [3, "Name length must be at least 3 characters!"],
        maxLength: [100, "Name length must not exceed 100 characters!"]
    },
    category: {
        type: String,
        required: [true, "Category is required!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description length must be at least 10 characters!"],
        maxLength: [200, "Description length must not exceed 200 characters!"],
    },
    productsNeeded: {
        type: [String],
        required: [true, "Products are required!"]
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required!"],
        minLength: [50, "Instructions length must be at least 50 characters!"]
    },
    reviews: {
        type: [ObjectId],
        ref: "Review",
        default: []
    }
}, { timestamps: { createdAt: "createdAt" } });

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;