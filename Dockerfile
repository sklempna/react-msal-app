# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Build the app for production
RUN npm run build

# Install a simple HTTP server for serving static content
RUN npm install -g serve

# Your app binds to port 5000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 5000

# Define environment variable
ENV REACT_APP_TENANT_ID=YourTenantIdHere
ENV REACT_APP_CLIENT_ID=YourClientIdHere
ENV REACT_APP_REDIRECT_URI=YourRedirectUriHere

# Run the app when the container launches
CMD ["npm", "start"]


# # pull official base image
# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]

# dockerignore

# node_modules
# build
# .dockerignore
# Dockerfile
# Dockerfile.prod

# $ docker build -t sample:dev .

# $ docker run \
#     -it \
#     --rm \
#     -v ${PWD}:/app \
#     -v /app/node_modules \
#     -p 3001:3000 \
#     -e CHOKIDAR_USEPOLLING=true \
#     sample:dev

