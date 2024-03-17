# react-msal-app

docker build -t my-msal-app .
docker run -p 3000:5000 -e REACT_APP_TENANT_ID=YourTenantIdHere -e REACT_APP_CLIENT_ID=YourClientIdHere -e REACT_APP_REDIRECT_URI=YourRedirectUriHere my-msal-app
