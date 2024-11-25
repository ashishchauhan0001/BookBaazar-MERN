# Use Node.js base image
FROM node:18.9.1

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the application
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
