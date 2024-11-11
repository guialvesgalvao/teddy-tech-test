# Usar a imagem oficial do Node.js versão 20
FROM node:20-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir a aplicação
RUN npm run build

# Expor a porta 5002
EXPOSE 5004

# Iniciar a aplicação
CMD ["npm", "run", "preview", "--", "--port", "5004", "--host"]
