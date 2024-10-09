# Use official Node.js image as the base image
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Only the runtime image
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV production

# Set working directory for the runtime container
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
