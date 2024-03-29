import React from "react";
import { useMsal, useAccount, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const App = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = useAccount(accounts[0] || {});

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

  const getAccessToken = async () => {
    const request = {
      scopes: [`api://${process.env.REACT_APP_BACKEND_CLIENT_ID}/.default`],
      account: account,
    };
    const response = await instance.acquireTokenSilent(request);
    return response.accessToken;
  };

  const getIdTokenClaims = async () => {
    if (account) {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: account,
      });
      return response.idToken;
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
          <div>
            <h1>Welcome to the MSAL React App</h1>
            <button
              onClick={async () => {
                const idToken = await getIdTokenClaims();
                alert(`ID Token: ${idToken}`);
              }}
            >
              Show ID Token
            </button>
            <button
              onClick={async () => {
                const accessToken = await getAccessToken();
                alert(`Access Token: ${accessToken}`);
              }}
            >
              Get accessToken
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
