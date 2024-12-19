# Use Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the application code
COPY server.js .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
