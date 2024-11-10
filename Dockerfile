FROM node:18.18.2-alpine3.18 as BUILD-ENV
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:stable-alpine-slim as RUN-ENV
ENV TZ=Asia/Ho_Chi_Minh
RUN apk --no-cache add tzdata
COPY --from=BUILD-ENV /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
