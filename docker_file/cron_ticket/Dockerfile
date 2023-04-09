#
#Ejemplo para crear un dockerfile con una image de node sobre alpine
#

#Para especificar arquitectura
#FROM --platform=linux/arm64 node:gallium-alpine3.16
FROM node:gallium-alpine3.16

# /app

#cd /app
WORKDIR /app

#Dest /app
COPY package.json ./

#Dest /app
COPY  . ./
#app.js ./

#Instalar las dependencias
RUN npm install

#Realizar testing
RUN npm run test

#Eliminar archivos y directorios innecesarios en produccion.
RUN rm -rf test && rm  -rf node_modules

#Unicamente las dependencias de prod.
RUN npm install --prod

#Comando run de la imagen
CMD ["node", "app.js"]