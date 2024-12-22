import Register from '@/components/auth/register'
import React from 'react'

export default function Registration() {
    return (
        <div
            className="bg-moviedb-black min-h-screen flex items-center justify-center p-4"
        >
            <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
                <div className="text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Create Your Account</h1>

                    <Register />

                    <div className="mt-6 text-moviedb-gray">
                        Already have an account?
                        <a href="#" className="text-white hover:underline">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
