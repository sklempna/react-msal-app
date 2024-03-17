// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID, // This is the Application (client) ID from Azure
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`, // Replace YOUR_TENANT_ID with your Azure AD tenant ID
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set to true if you are working in environments like IE11
  },
};

// Add scopes for your application
export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"], // Add other scopes as needed
};
