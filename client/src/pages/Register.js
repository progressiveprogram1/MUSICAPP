import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    try {
      const response = await axios.post("/api/users/register", user);
      if (response.data.success) {
        alert("User registered successfully");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 w-96 p-5 shadow border border-gray-300">
        <h1 className="text-3xl font-bold text-gray-700">
          Welcome to DILSE MUSIC
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="primary" onClick={register}>
          Register
        </button>
        <Link to="/login" className="text-gray-600 underline">
          Click Here To Login
        </Link>
      </div>
    </div>
  );
}
export default Register;
