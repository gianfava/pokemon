# Etapa 1: Construção da aplicação
FROM node:16-alpine AS build

WORKDIR /app

# Instala as dependências e faz a build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Configuração do Nginx para servir o build
FROM nginx:1.21-alpine

# Copia o build gerado na etapa anterior para o Nginx

COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80 para o Nginx
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
