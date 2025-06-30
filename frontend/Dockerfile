FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN mkdir -p /var/cache/nginx/client_temp && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

USER appuser
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
