import { useState } from "react";
import { login } from "../cart";
import useLoggedIn from "../hooks/useLoggedIn";
import { FaFingerprint } from "react-icons/fa6";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  //   if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <FaFingerprint id="showlogin" size={40} />
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: "14rem",
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => {
              login(username, password);
              setShowLogin(!showLogin);
            }}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
