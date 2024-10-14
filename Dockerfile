FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript code
RUN npm run build

# Copy public directory to dist
RUN cp -r src/public dist/public

# Expose port and start the server
EXPOSE 5000
CMD [ "node", "dist/server.js" ]
