const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/LoginRoutes');
const eventRoutes = require('./routes/eventRoutes');
const mysql = require('mysql');
const cors = require('cors');

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'projetoAplicado'
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

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Rotas de login
app.use('/api', loginRoutes);
app.use('/apievent', eventRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
