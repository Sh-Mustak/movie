"use server";
import { permanentRedirect } from "next/navigation";
import connectMongo from "@/lib/db";
import { User } from "@/models/user-model";
import { Watchlist } from "@/models/watch-list";

// Function to register a user and redirect
export async function registerUser(formData) {
    let redirectPath;
    // console.log(formData);

    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const password = formData.get("password");
    const cpassword = formData.get("cpassword");
    const cbox = formData.get("cbox");

    const userData = {
        fname,
        lname,
        email,
        password,
        cpassword,
        cbox,
    };

    try {

        await connectMongo();

        // Insert user data into database
        await new User(userData).save();
        // Redirect after successful registration
        // permanentRedirect("/login");
        redirectPath = '/login'
    } catch (err) {
        console.error("Error registering user:", err);
    }
    finally {
        //Clear resources
        if (redirectPath)
            permanentRedirect(redirectPath)
    }
}
export async function addToWatchlist(userId, movieId) {
    try {
        await connectMongo();

        // Find the user's watchlist
        let watchlist = await Watchlist.findOne({ userId });

        if (!watchlist) {
            // If no watchlist exists for the user, create one
            watchlist = new Watchlist({
                userId,
                movieIds: [movieId], // Initialize with the provided movieId
            });
        } else {
            // Check if the movie is already in the watchlist
            if (watchlist.movieIds.includes(movieId)) {
                console.log("Movie already in watchlist");
                return { message: "Movie already in watchlist" };
            }

            // Add the movieId to the user's watchlist
            watchlist.movieIds.push(movieId);
        }

        // Save the updated or new watchlist
        await watchlist.save();
        console.log("Movie added to watchlist successfully");
        return { message: "Movie added to watchlist successfully" };
    } catch (err) {
        console.error("Error while adding to watchlist:", err);
        throw new Error("Error while adding to watchlist");
    }
}
export async function removeFromWatchlist(userId, movieId) {
    try {
        await connectMongo();

        // Find the user's watchlist
        const watchlist = await Watchlist.findOne({ userId });

        if (!watchlist) {
            console.log(`No watchlist found for User (ID: ${userId})`);
            return { message: "Watchlist not found" };
        }

        // Check if the movie is in the watchlist
        const movieIndex = watchlist.movieIds.indexOf(movieId);
        if (movieIndex === -1) {
            console.log(`Movie (ID: ${movieId}) not in watchlist for User (ID: ${userId})`);
            return { message: "Movie not in watchlist" };
        }

        // Remove the movieId from the user's watchlist
        watchlist.movieIds.splice(movieIndex, 1);

        // Save the updated watchlist
        await watchlist.save();
        console.log(`Movie (ID: ${movieId}) removed from watchlist for User (ID: ${userId}) successfully`);
        return { message: "Movie removed from watchlist successfully" };
    } catch (err) {
        console.error(`Error while removing from watchlist for User (ID: ${userId}), Movie (ID: ${movieId}):`, err);
        throw new Error("Error while removing from watchlist");
    }
}

export async function getUserWatchlist(userId) {
    try {
        await connectMongo();

        const watchlist = await Watchlist.findOne({ userId });
        return watchlist ? watchlist.movieIds : [];
    } catch (error) {
        console.error("Error fetching user's watchlist:", error);
        throw new Error("Unable to fetch watchlist");
    }
}


export async function fetchUserWatchlist(userId) {
    try {
        await connectMongo();

        // Find the user's watchlist
        const watchlist = await Watchlist.findOne({ userId });

        if (!watchlist) {
            return []; // Return an empty array if no watchlist exists
        }

        return watchlist.movieIds; // Return the array of movie IDs
    } catch (error) {
        console.error("Error fetching user watchlist:", error);
        throw new Error("Failed to fetch user watchlist");
    }
}
export async function getMoviesById(movieId) {
    console.log("Fetching movie with ID:", movieId);
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f07043403b1b6dbddb4feb0a44044415`);
        if (!response.ok) {
            throw new Error(`Failed to fetch movie with ID ${movieId}`);
        }
        const data = await response.json();
        console.log("Fetched movie data:", data);
        return data;
    } catch (error) {
        console.error("Error in getMoviesById:", error);
        return null; // Return null if an error occurs
    }
}
