const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/LoginRoutes');
const mysql = require('mysql');
const cors = require('cors');

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'projetoAplicado' // Nome do seu banco de dados
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Coloque o middleware CORS antes das rotas

// Middleware para permitir JSON nos corpos das requisições
app.use(bodyParser.json());

// Rotas de login
app.use('/api/login', loginRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
