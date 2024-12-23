"use client";
import { getUsers } from "@/app/actions"; // Assumes this fetches users from the database
import useAuthContext from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const enteredEmail = form.name.value;
    const enteredPassword = form.password.value;

    try {
      // Fetch users from the database
      const users = await getUsers(); // Assuming this returns a list of users with email and password

      // Find a matching user
      const user = users.find(
        (u) => u.email === enteredEmail && u.password === enteredPassword
      );

      if (user) {
        // Login successful: Update AuthContext with the authenticated user
        setAuth({
          isAuthenticated: true,
          user: user, // Set only the logged-in user
        });
        console.log("Login successful:", user);
        setErrorMessage("");
        router.push("/");
      } else {
        // Invalid credentials
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form id="loginForm" className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="name"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <button
          type="submit"
          className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
