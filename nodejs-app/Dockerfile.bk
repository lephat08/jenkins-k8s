# Use Node.js as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy the necessary files
COPY package.json package.json
COPY app.js app.js

# Install dependencies (none are needed for this simple task, but kept in case of future needs)
RUN npm install

# Run the Node.js script
CMD ["node", "app.js"]
