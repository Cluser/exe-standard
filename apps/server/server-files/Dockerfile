# # # Stage 1: App build
FROM node:20 as build
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . /app
WORKDIR /app/libs/server/server-files/core/prisma-client/prisma
RUN npx prisma generate
RUN npx prisma db push
WORKDIR /app
CMD [ "npm", "run". "build:server-files" ]

# # # Stage 2: App run
FROM node:20 as production
WORKDIR /app
COPY --from=build /app/dist/apps/server/server-files /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/libs/server/server-files/core/prisma-client/prisma /app/libs/server/server-files/core/prisma-client/prisma
CMD [ "node", "main.js" ]

