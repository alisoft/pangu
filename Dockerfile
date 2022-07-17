FROM node:14

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN mkdir -p /code/pangu && chown -R node:node /code/pangu

WORKDIR /code/pangu

COPY package.json pnpm-lock.yaml .pnpmfile.cjs ./

USER node

COPY --chown=node:node . .

RUN pnpm install --pure-lockfile

RUN pnpm build

EXPOSE 80
EXPOSE 443

CMD [ "pnpm", "start" ]
