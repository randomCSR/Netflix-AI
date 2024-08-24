import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateInput } from "../utils/helpers/helper";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showErrorMsg, setShowErrorMsg] = useState(true);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleOnSubmit = () => {
    console.table(
      userName.current.value,
      email.current.value,
      password.current.value
    );
    const errorMsg = validateInput(
      userName.current.value,
      email.current.value,
      password.current.value
    );
    setShowErrorMsg(errorMsg);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 my-56 mx-auto right-0 left-0 p-12 bg-black absolute text-white back rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-6 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-black bg-opacity-85 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-black bg-opacity-85"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black bg-opacity-85"
        />
        <p className="py-4 text-red-400 font-semibold text-lg">
          {showErrorMsg}
        </p>
        <button
          onClick={handleOnSubmit}
          className="p-2 my-6 w-full bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
