# Use Node.js official image
FROM node:18

# Create app directory
WORKDIR /app

# Copy and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy app files
COPY backend/ .

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
