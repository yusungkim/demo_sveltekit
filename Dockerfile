FROM node:18

# Set the Node environment to development to ensure all packages are installed
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 3000
EXPOSE 3001

CMD ["yarn", "dev"]