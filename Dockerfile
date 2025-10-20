# Stage 1: Build Stage

FROM node:18-alpine AS builder

# working directory is set here 
WORKDIR /app

COPY package*.json ./

# install dependencies using ci so I won't install everything again 
# This is faster and more reliable for build environments
# when I rebuild the image, it will use the cached layer if package.json hasn't changed
RUN npm ci 

COPY . .

#--------------------------------
#--------------------------------


# Stage 2: Production Stage 
FROM node:18-alpine

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only built files and node_modules from builder
COPY --from=builder /app /app

# Set environment variable for production
ENV NODE_ENV=production

# Expose API port
EXPOSE 5001

# Switch to non-root user
USER appuser

# Run the API
CMD ["node", "server.js"]
