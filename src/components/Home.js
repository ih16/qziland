import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Home = () => {
  return (
    <div className="w-full px-8 py-5 flex flex-col h-96  justify-center items-center">
      <div className="text-2xl sm:text-3xl mb-2">Take a quiz for no reason</div>
      <div className="text-md mb-8 text-gray-600">Sign in to begin..</div>
      <Link to="/signin">
        <Button value="Sign in" />
      </Link>
    </div>
  );
};

export default Home;
