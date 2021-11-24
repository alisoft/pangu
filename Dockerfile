FROM node:12-alpine

RUN mkdir -p /code/node-boilerplate && chown -R node:node /code/node-boilerplate

WORKDIR /code/node-boilerplate

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

RUN yarn build

EXPOSE 80
EXPOSE 443

CMD [ "yarn", "server:prod" ]
