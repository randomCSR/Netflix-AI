import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 my-56 mx-auto right-0 left-0 p-12 bg-black absolute text-white back rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 w-full">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button className="p-2 my-6 w-full bg-red-700 rounded-lg">
        {isSignInForm ? "Sign In" :"Sign Up"}
        </button>
        <p
          className="p-2 my-3 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign up now." :"Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
