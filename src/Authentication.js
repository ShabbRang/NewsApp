import { React, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import newsEmote from "./images/newsEmote.svg";

const Authentication = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleIsRegistered = () => {
    isRegistered ? setIsRegistered(false) : setIsRegistered(true);
  };

  return (
    <div className="flex" id="auth">
      {isRegistered && <Register handleIsRegistered={handleIsRegistered} />}
      {!isRegistered && <Login handleIsRegistered={handleIsRegistered} />}

      <img className="h-screen w-1/2 p-4" src={newsEmote} alt="" />
    </div>
  );
};

export default Authentication;
