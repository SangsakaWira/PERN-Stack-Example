FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]