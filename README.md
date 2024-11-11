# 🐻 Desafio Teddy Open Finance - Front-End Developer
Este projeto foi desenvolvido como parte de um desafio técnico de Desenvolvedor Front-End na Teddy Open Finance. A aplicação utiliza uma arquitetura de Microfrontend com Vite Module Federation, React, e TypeScript para construir uma plataforma de login e gerenciamento de clientes.

# 🧑‍💻 Tecnologias
- **Frontend**: React, Tailwind CSS, Shadcn, Framer Motion
- **Gerenciamento de Estado**: Zustand, Tanstack React Query
- **Construção e Deploy**: Docker, Docker Compose
- **Backend Middleware**: Node.js, com um middleware desenvolvido para resolver problemas de CORS
- **Hospedagem**: Vercel (frontend) e Railway (API middleware)

# ⚙️ Setup do Projeto
**1. Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- Docker
- Docker Compose
- Node.js: Versão 20 (recomendada para garantir compatibilidade)

**2. Passos para Iniciar o Projeto**
- Clone o repositório:


```
git clone https://github.com/guialvesgalvao/teddy-tech-test.git
cd teddy-tech-test
```
- Inicie a aplicação com Docker Compose: No diretório raiz do projeto, execute o comando:
```
docker-compose up --build
```
Esse comando construirá e executará os containers da aplicação. O projeto estará disponível na porta 5173.

**3. Acessar a aplicação:**

Após a execução, acesse o projeto em http://localhost:5173.

# 🚀 Deploy
 O projeto está disponível online e pode ser acessado diretamente em https://teddy-tech-test-root.vercel.app

# 🌐 Arquitetura de Microfrontend
 O projeto foi construído utilizando três módulos distintos, conforme a arquitetura de Microfrontends:

1. **Root**: O módulo principal da aplicação.
2. **Auth**: Responsável pelo fluxo de autenticação.
3. **Customers Panel**: Módulo que gerencia a listagem de clientes e permite edição e exclusão.
 
 Todos os módulos foram desenvolvidos com Vite, React, TypeScript e configurados com Module Federation para integração.

# 📋 Funcionalidades
- **Login**:

A tela de login permite que o usuário se autentique no sistema de forma fictícia utilizando nome de usuário e senha. Ao realizar login com sucesso, o usuário é redirecionado para o painel de clientes.

- **Painel de Clientes**
 
No painel de clientes, o usuário pode:

Visualizar clientes disponíveis: Uma lista de clientes que podem ser selecionados para visualização.
Selecionar clientes para visualização: Clientes selecionados são exibidos em uma aba exclusiva para fácil gerenciamento.
Editar e Excluir clientes: Funções de edição e exclusão são disponibilizadas para cada cliente listado.

# 🧩 Middleware
Um middleware foi implementado para realizar chamadas à API oficial do projeto, resolvendo problemas de CORS encontrados durante o desenvolvimento. O middleware encontra-se na pasta middleware na raiz do projeto e foi hospedado no Railway com a seguinte URL base:

API Middleware Base URL: https://teddy-tech-test-production.up.railway.app/

# 🎨 Estilização
A aplicação utiliza Tailwind CSS para estilização e Shadcn para componentes, proporcionando uma interface atraente e responsiva. Framer Motion foi utilizado para animações, melhorando a experiência de usuário.

Feito para o Desafio Teddy Open Finance 🚀