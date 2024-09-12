/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../src/index.css";
import axios from "axios";
import Loader from "./Loader";
import { replace, useNavigate } from "react-router-dom";
import Dashboard from "./DashBoard";

export default function Login_form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenNum, setTokenNum] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null);
  const [person, setPerson] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   authentication()
  // },)
  const authentication = async () => {
    try {
      setLoading(true);
      if (email == "zinal@ingressit.com" && password == "lkRpK1Wx") {
        const response = await axios?.post(
          "https://ingress.bizcrmapp.com/api/v1/auth/login",
          {
            email: email,
            password: password,
          }
        );

        console.log(response.data);
        setMsg(response.message);
        const user = response.data.data;
        console.log("user===>>", user);

        console.log("message=====>>>",msg);
        
        const token = user.token;
        setTokenNum(token);
        setPerson(user.user.name);

        localStorage.setItem("Token", token);
        console.log("Token saved to localStorage:", token);

        navigate("/dashboard", { state: { person } }, { replace: true });
        fetchLeadData(token);
        setError(null)
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
        console.error('Error:', error);
      
    } finally {
      setLoading(false);
    }
  };

  const fetchLeadData = async (token) => {
    try {
      const response = await axios?.get(
        "https://ingress.bizcrmapp.com/api/v1/lead",
        {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        }
      );
      console.log("data---->>", response.data.data);

      setData(response.data.data);

      console.log("Data fetched:", response.data);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError("Failed to fetch data");
    }
  };

  return (
    <div>
      {/* Background blob darkgreen */}
      <svg
        className="blob1 w-full opacity-35 z-10"
        viewBox="0 0 300 300"
        height="70%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#00712D"
          d="M45.3,-36C60.6,-17,76,1.9,72.9,17.1C69.8,32.2,48.1,42.6,28.7,48.8C9.2,54,-8,53.2,-25.9,47.1C-43.9,41,-62.5,29.8,-67.4,13.9C-72.2,-2,-63.2,-22.6,-49.6,-41.2C-36.1,-59.8,-18,-76.4,-1.5,-75.2C15,-74,30.1,-55,45.3,-36Z"
          transform="translate(60 60)"
        />
      </svg>

      {/* background blob lightGreen */}
      <svg
        className="blob2 w-full opacity-45 z-10"
        viewBox="0 0 250 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#D5ED9F"
          d="M60.5,-47.1C69.8,-36.6,62.9,-11.9,56.1,10.7C49.2,33.2,42.4,53.7,27.4,63.3C12.4,73,-10.9,72,-26.3,61.8C-41.7,51.6,-49.3,32.3,-52.5,13.4C-55.7,-5.4,-54.4,-23.9,-44.9,-34.5C-35.4,-45,-17.7,-47.7,3.9,-50.9C25.6,-54,51.2,-57.6,60.5,-47.1Z"
          transform="translate(200 200)"
        />
      </svg>

      {/* login form */}
      <div className="bg-white w-full flex justify-center items-center loginPage">
        <div className="w-fit md:w-full max-w-md z-20">
          <form className="bg-darkGreen shadow-lg shadow-darkGreen rounded px-8 pt-8 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-lightGreen text-sm font-bold mb-2">
                USERNAME
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-dotted"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lightGreen text-sm font-bold mb-2">
                PASSWORD
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-dotted"
                id="password"
                type="password"
                placeholder="*********"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <!-- <p classNameName="text-red-500 text-xs italic">Please choose a password.</p> --> */}
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-musturd hover:bg-amber-600 shadow-md shadow-musturd text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={authentication}
                disabled={loading}
              >
                Sign In
              </button>
            </div>
          </form>
          {msg}
          {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="py-2">
            {item.name}
          </li>
        ))}
      </ul>


      {/* loader */}
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
