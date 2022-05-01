FROM node:14-alpine

RUN mkdir -p /code/pangu && chown -R node:node /code/pangu

WORKDIR /code/pangu

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

RUN yarn build

EXPOSE 80
EXPOSE 443

CMD [ "yarn", "start" ]
