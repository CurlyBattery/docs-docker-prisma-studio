FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

CMD ["sh", "-c", "npm run db:deploy && npm run dev"]