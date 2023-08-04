# Usa la imagen de node con la versión específica (v18.17.0)
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el yarn.lock al contenedor
COPY package*.json yarn.lock ./

# Instala las dependencias con yarn
RUN yarn install --frozen-lockfile

# Copia el resto del código fuente de la librería al contenedor
COPY . .

# Construye la librería con create-react-library
RUN yarn build

EXPOSE 4000

CMD [ "yarn" , "start" ]
