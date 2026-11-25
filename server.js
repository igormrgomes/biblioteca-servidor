require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const livrosRouter = require('./routes/livros');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/livros', livrosRouter);

app.use((error, req, res, next) => {
  console.error('Erro ao processar requisição:', error);

  if (error instanceof SyntaxError && Object.prototype.hasOwnProperty.call(error, 'body')) {
    return res.status(400).json({ message: 'O corpo da requisição contém JSON inválido.' });
  }

  return res.status(500).json({ message: 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  if (!process.env.MONGODB_URI) {
    throw new Error('A variável de ambiente MONGODB_URI é obrigatória.');
  }

  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Falha ao iniciar o servidor:', error);
  process.exitCode = 1;
});
