# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Build the React app
RUN npm run build

# Expose port 80 for the web server to listen on
EXPOSE 80

# Start the web server
CMD ["npm", "start"]
