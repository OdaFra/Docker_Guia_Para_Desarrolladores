#
#Ejemplo para crear un dockerfile con una image de node sobre alpine
#

#Para especificar arquitectura
#FROM --platform=linux/arm64 node:gallium-alpine3.16
# FROM --platform=$BUILDPLATFORM node:gallium-alpine3.16

#Dependecias de desarrollo
FROM node:gallium-alpine3.16  as deps
WORKDIR /app
COPY package.json ./
RUN npm install


# Dependecias para testing & build
FROM node:gallium-alpine3.16  as builder
WORKDIR /app
COPY  --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Dependencia para produccion - State
FROM node:gallium-alpine3.16  as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Ejecutar la APP
FROM node:gallium-alpine3.16  as runner
WORKDIR /app
COPY  --from=deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/  ./tasks

#Comando run de la imagen
CMD ["node", "app.js"]