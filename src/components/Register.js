import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEmail } from "./EmailContext";

const Register = ({ handleIsRegistered }) => {
  const { email, setEmail } = useEmail();

  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(email)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked")
    console.log(email)

    try {
      if (password === confirmPassword) {
        const data = {
          email: email,
          password: password,
        }
        
        setFormData(data);
        setIsAuthenticated(true);
        setEmail(email);
        console.log("isAuthenticated");
      } else {
        throw console.error(e);
      }
      const response = await fetch("/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        console.log("Data sent successfully:", data);
      } else {
        console.error(
          "Failed to send data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <section className="bg-gray-800 w-1/2 text-white p-4 border-1 border-white rounded-e-xl flex justify-center items-center">
      <form
        action=""
        className="border-1 border-white rounded-xl h-5/6 w-4/5 p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center mb-3">NewsHub</h1>
        <h1 className="text-2xl font-semibold  text-center">Register</h1>
        <div className=" h-8 my-12">
          <label htmlFor="email">Email </label> <br />
          <input
            id="email"
            type="email"
            className=" p-2 w-3/4 bg-inherit focus:outline-blue-500 border-2 border-gray-300 rounded-md "
            placeholder="email id"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className=" h-8 my-12">
          <label htmlFor="password">Password </label> <br />
          <input
            id="password"
            type="password"
            className=" p-2 w-3/4 bg-inherit focus:outline-blue-500 border-2 border-gray-300 rounded-md "
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className=" h-8 mb-12">
          <label htmlFor="cpass">Confirm Password </label> <br />
          <input
            id="cpass"
            type="password"
            className=" p-2 w-3/4 bg-inherit focus:outline-blue-500 border-2 border-gray-300 rounded-md "
            placeholder=" confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button
          // to="/preferences"
          className="border-1 border-white px-4 py-1 my-3 rounded-md mx-auto flex hover:bg-black "
        onClick={handleSubmit}>
          <Link to={isAuthenticated ? "/preferences" : "/"}>login</Link>
        </button>
        <p className="text-center mx-auto">
          Already have an account?
          <button className="text-blue-500" onClick={handleIsRegistered}>
            login
          </button>
        </p>
      </form>
    </section>
  );
};

export default Register;
