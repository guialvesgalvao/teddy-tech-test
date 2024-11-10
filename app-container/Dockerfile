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

# Expor a porta 5173
EXPOSE 5173

# Iniciar a aplicação
CMD ["npm", "run", "dev", "--", "--host"]
