import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "./ui/Button";
import InpuText from "./ui/InputText";
import { UserContext } from "./UserContext";
import { users, userRoles } from "./mockData";

const Signin = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [state, setState] = useState({ email: "", password: "" });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  function authorize(user) {
    localStorage.setItem("userId", user.id);
    setUser({ id: user.id });

    props.history.push("/user");
  }

  function submit(e) {
    e.preventDefault();
    if (!state.email || !state.password) {
      toast.error("Email or password cannot be empty");
      return;
    }

    const user = users.find((user) => user.email === state.email);
    if (user) {
      const userRole = userRoles.find((userRole) => userRole.userId === user.id)
        .role;
      if (user.password == state.password && userRole == "user")
        authorize(user);
      else toast.error("Invalid email or password");
    } else toast.error("Invalid email or password");
  }

  return (
    <div className="container px-8 py-10 mx-auto flex flex-col justify-center items-center">
      <Toaster />
      <h2 className="text-2xl mb-8">Sign in to your account</h2>
      <form
        className="w-full max-w-sm rounded-md shadow-xl px-6 py-8"
        onSubmit={(e) => submit(e)}
      >
        <InpuText
          label="Email"
          placeholder="johndoe@exampl.com"
          value={state.email}
          onChange={handleChange}
          name="email"
        />
        <InpuText
          label="Password"
          placeholder="Password"
          type="password"
          value={state.password}
          onChange={handleChange}
          name="password"
        />
        <div
          className="mt-4
        "
        >
          <Button value="Sign In" />
          <span
            onClick={(e) => {
              e.preventDefault();
              alert("📧: user@qmail.com\n🔑: somethingstrong");
            }}
            className="ml-3 cursor-pointer hover:text-primary transition-colors duration-300"
          >
            Forgot Password
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
