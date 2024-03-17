# react-msal-app

## run with docker

docker build -t msalapp .

docker run -p 3000:3000 -e REACT_APP_TENANT_ID=TenantId -e REACT_APP_CLIENT_ID=ClientId -e REACT_APP_REDIRECT_URI=RedirectUri msalapp
