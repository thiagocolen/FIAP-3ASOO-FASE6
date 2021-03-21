# This image will be based on the oficial nodejs docker image
FROM node:latest

# Set in what directory commands will run
WORKDIR /app

# Put all our code inside that directory that lives in the container
ADD . /app

# Install dependencies
RUN npm i

COPY . /app

# Tell Docker we are going to use this port
EXPOSE 8080

# The command to run our app when the container is run
CMD ["node", "./app/index.js"]
