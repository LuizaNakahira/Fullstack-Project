require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Importando rotas
const authRoutes = require("../backend/src/routes/authRoutes");

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Conectando ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Definição das rotas
app.use("/api/auth", authRoutes); // Adicionando as rotas de autenticação

// Rota teste
app.get("/", (req, res) => {
  res.send("Backend está rodando!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
