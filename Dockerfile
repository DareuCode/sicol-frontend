# Etapa 1: Construcción de la aplicación Angular
FROM node:18 as build

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del proyecto
COPY . .

# Construir la aplicación Angular en modo producción
RUN yarn build --configuration production

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:1.23-alpine

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos al directorio de Nginx
COPY --from=build /app/dist/sicol-frontend/browser /usr/share/nginx/html

RUN ls -la /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
