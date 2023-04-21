FROM node:lts
WORKDIR /usr/src/app
RUN npm install -g pnpm
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
COPY src ./src
COPY tsconfig.json ./
ARG DATABASE_HOST
ARG DATABASE_USERNAME
ARG DATABASE_PASSWORD
RUN echo "DATABASE_HOST=$DATABASE_HOST" > .env && \
    echo "DATABASE_USERNAME=$DATABASE_USERNAME" >> .env && \
    echo "DATABASE_PASSWORD=$DATABASE_PASSWORD" >> .env
RUN pnpm run build
RUN pnpm install --prod
EXPOSE 3000
CMD [ "node", "dist/server.js" ]
