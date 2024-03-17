// src/App.js
import React from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const App = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.error(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.error(e);
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <button onClick={() => handleLogin("popup")}>
            Sign in using Popup
          </button>
        ) : (
          <h1>Welcome to the MSAL React App</h1>
        )}
      </header>
    </div>
  );
};

export default App;
