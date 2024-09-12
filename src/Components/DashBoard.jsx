/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(null);

  const location = useLocation();
  const {username} = location.state || {}

  console.log(`name---->>`,username);
  

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem('Token');
    if (storedToken) {
      setToken(storedToken);
    }
    
  }, []);
  // toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // toggle leads option in sidebar
  const toggleMenu = () => {
      const menu = document.getElementById('menu');
      const isOpen = menu.classList.contains('block');
      if (isOpen) {
        menu.classList.remove('block');
        menu.classList.add('hidden');
      } else {
        menu.classList.remove('hidden');
        menu.classList.add('block');
      }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#00712D] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-6">
          {/* Sidebar logo */}
          <img src="../../Images/logo3.png" alt="logo" width={150} />
          <ul>
            <li className="mt-4 mb-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
              <a className=" cursor-pointer hover:text-[#D5ED9F]">
                Dashboard
              </a>
            </li>

            <li className="mb-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                  clipRule="evenodd"
                />
              </svg>
              <a className=" cursor-pointer hover:text-[#D5ED9F]">
                Profile
              </a>
            </li>

              <div className=" inline-block text-left mb-4">
                <div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-darkGreen px-3 py-2 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-darkGreen"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Leads
                    <svg
                      className="-mr-1 h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu"
                  className="right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <form className="flex justify-center items-center " method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="block rounded bg-musturd w-fit px-4 py-2 text-left text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>

            <li className="mb-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#" className="hover:text-[#D5ED9F]">
                Settings
              </a>
            </li>

            <li className="mb-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#" className="hover:text-[#D5ED9F]">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-[#00712D] text-white p-4 flex justify-between items-center">
          <img src="../../Images/logo3.png" width={200} alt="" />
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 bg-[#D5ED9F]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold text-[#00712D]">
                Card Title 1
              </h2>
              <p className="text-gray-700 mt-2">
                This is a description for the first card.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold text-[#FFBE6F]">
                Card Title 2
              </h2>
              <p className="text-gray-700 mt-2">
                This is a description for the second card.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold text-[#F91000]">
                Card Title 3
              </h2>
              <p className="text-gray-700 mt-2">
                This is a description for the third card.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold text-[#00712D]">
                Card Title 1
              </h2>
              <p className="text-gray-700 mt-2">
                This is a description for the fourth card.
              </p>
            </div>
          </div>
        </div>
        {username}
        {token ? <p>Token: {token}</p> : <p>No token found in localStorage</p>}
        {/* Footer */}
        <footer className="bg-[#00712D] text-white p-4 text-center">
          <p>&copy; 2024 All rights reserved</p>
        </footer>
      </div>
    
    </div>
  );
};

export default Dashboard;
