"use server";


import { permanentRedirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import connectMongo from "@/lib/db";
import { User } from "@/models/user-model";

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
export const getUsers = async () => {
    try {
        await connectMongo();

        // get users
        const users = await User.find();

        return users;
    } catch (err) {
        console.log(err);
    }
};