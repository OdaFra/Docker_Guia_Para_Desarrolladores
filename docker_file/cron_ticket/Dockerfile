#
#Ejemplo para crear un dockerfile con una image de node sobre alpine
#

FROM node:gallium-alpine3.16
# /app

#cd /app
WORKDIR /app

#Dest /app
COPY app.js package.json ./

#Instalar las dependencias
RUN npm install

#Comando run de la imagen
CMD ["node", "app.js"]