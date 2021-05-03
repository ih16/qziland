import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const LayoutUser = (props) => {
  const { user, setUser } = useContext(UserContext);

  function proceedSignout(e) {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("userAnswers");
    props.history.push("/");
  }

  return (
    <div className="w-full">
      <div className="container px-8 py-5 mx-auto flex justify-between">
        <div className="w-1/2 flex justify-start text-3xl">
          <Link to="/">
            <span className="text-primary font-medium">Q</span>ziland
          </Link>
        </div>
        <div className="w-1/2 flex justify-end text-xl">
          {user && (
            <Link
              to="#"
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => proceedSignout(e)}
            >
              Sign out
            </Link>
          )}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default LayoutUser;
