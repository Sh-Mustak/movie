import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // Reference to the User collection
    },
    movieIds: [
        {
            type: String, // Unique Movie ID
            required: true,
        },
    ],
});

export const Watchlist =
    mongoose.models.Watchlist || mongoose.model("Watchlist", watchlistSchema);
