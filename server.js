const express = require("express");

const app = express();
app.use(express.json()); // Permite receber JSON no body das requisições

// Rota de login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Simulação de usuário e senha válidos
    if (username === "admin" && password === "123456") {
        return res.json({ name: "Administrador" });
    }

    return res.status(401).json({ error: "Usuário ou senha inválidos" });
});

// Iniciar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});