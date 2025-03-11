# Integrantes do grupo

Alex Carlos do Nascimento Filho - 2212063
Bruno Eduardo Andrade Azevedo - 2210639
Hyago Brucy Dias Martins - 2420709
Jean Carlos Araujo Medrado - 2212305
João Pedro Venancio de Oliveira - 2110663

# Servidor Node.js com Express

Este projeto é um servidor básico para autenticação de usuário.

## Como executar:

1. Instale as dependências:
    npm install

2. Inicie o servidor:
    node server.js

3. Use o Postman para enviar um `POST` para `http://localhost:3000/login` com o JSON:
{
  "username": "admin",
  "password": "123456"
}
