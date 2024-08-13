import React, { useState } from "react";
import { useEmail } from "./EmailContext"; // Import the useEmail hook

const Login = ({ handleIsRegistered }) => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setEmail, email } = useEmail(); // Destructure setEmail from the context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/check/" + email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // Sending password in the request body
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message === "User Authenticated") {
          // Set the email in the context upon successful authentication
          setEmail(email);
          console.log(email);

          // Navigate to "/home"
          window.location.href = "/home";
        } else {
          // Display error message
          setError(data.message);
        }
      } else {
        // Display error message
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-gray-800 w-1/2 text-white p-4 border-1 border-white rounded-e-xl flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-1 border-white rounded-xl h-3/4 w-4/5 p-5"
      >
        <h1 className="text-3xl font-bold text-center mb-3">NewsHub</h1>
        <h1 className="text-2xl font-semibold  text-center">Login</h1>
        <div className=" h-8 my-12">
          <label htmlFor="email">Email </label> <br />
          <input
            type="email"
            id="email"
            className=" p-2 w-3/4 bg-inherit focus:outline-blue-500 border-2 border-gray-300 rounded-md "
            placeholder="email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className=" h-8 mb-20">
          <label htmlFor="password">Password </label> <br />
          <input
            type="password"
            id="password"
            className=" p-2 w-3/4 bg-inherit focus:outline-blue-500 border-2 border-gray-300 rounded-md "
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="border-1 border-white px-4 py-1 my-3 rounded-md mx-auto flex hover:bg-black "
        >
          Login
        </button>
        <p className="text-center mx-auto">
          Don't have an account?{" "}
          <button className="text-blue-500" onClick={handleIsRegistered}>
            Register
          </button>
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default Login;
