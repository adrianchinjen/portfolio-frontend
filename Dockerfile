# STAGE 1
FROM node:18-alpine AS build

# this sets the working directory in the container
WORKDIR /app

# install the yarn
RUN apk add --no-cache bash curl \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

# copy package json and lock file
COPY package.json yarn.lock ./

# run the installation of dependencies
RUN yarn install

# copy the source code
COPY . .

# build the application
RUN yarn build

# STAGE 2
FROM nginx:1.23-alpine

# copy the build output from the 'build' stage to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# expose the port
EXPOSE 80

# start the nginx server
CMD ["nginx", "-g", "daemon off;"]