const express = require('express');
const duvidaRouter = require('./routes/duvida-route');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/duvidas", duvidaRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});