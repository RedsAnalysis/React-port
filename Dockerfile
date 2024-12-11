# Stage 1: Build the application
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
# Verify the `dist` folder is created
RUN ls -l /app/dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine AS stage-1
# Copy the `dist` folder to the default Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 for HTTP traffic
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
