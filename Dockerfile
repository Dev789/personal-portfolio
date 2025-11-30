# Build Stage
FROM node:lts-alpine AS builder
WORKDIR /app
# Install git as it might be required by some npm dependencies
RUN apk add --no-cache git
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
