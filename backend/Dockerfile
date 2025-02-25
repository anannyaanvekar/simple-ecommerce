# Use Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run the backend application
CMD ["node", "server.js"]

# Expose the port (make it available)
EXPOSE 5000
