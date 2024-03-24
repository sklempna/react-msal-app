# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

EXPOSE 3000

ENV REACT_APP_TENANT_ID YourTenantIdHere
ENV REACT_APP_CLIENT_ID YourClientIdHere
ENV REACT_APP_REDIRECT_URI YourRedirectUriHere
ENV REACT_APP_BACKEND_CLIENT_ID YourBackendClientId

# start app
CMD ["npm", "start"]
