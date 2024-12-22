"use server";


import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import connectMongo from "@/lib/db";
import { User } from "@/models/user-model";

// Function to register a user and redirect
export async function registerUser(formData) {
    console.log(formData);

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
        redirect("/login");
    } catch (err) {
        console.error("Error registering user:", err);
    }
}