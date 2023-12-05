const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'projetoAplicado'
});

exports.checkLogin = (req, res) => {
  const { usuario, senha } = req.body;

  const CHECK_LOGIN_QUERY = 'SELECT * FROM login WHERE usuario = ? AND senha = ?';
  db.query(CHECK_LOGIN_QUERY, [usuario, senha], (error, results, fields) => {
    if (error) {
      console.error('Erro ao verificar dados de login:', error);
      return res.status(500).json({ error: 'Erro ao verificar dados de login' });
    }

    if (results.length === 0) {
      // Não foram encontrados dados correspondentes
      return res.status(401).json({ message: 'Credenciais inválidas' });
    } else {
      // Dados de login correspondentes foram encontrados
      return res.status(200).json({ message: 'Login bem-sucedido!' });
    }
  });
};

exports.registerUser = (req, res) => {
  const { nome, usuario, telefone, dataNascimento, email, senha } = req.body;

  const INSERT_USER_QUERY = 'INSERT INTO login (nome, usuario, telefone, dataNascimento, email, senha) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(
    INSERT_USER_QUERY,
    [nome, usuario, telefone, dataNascimento, email, senha],
    (error, results, fields) => {
      if (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      }
      return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }
  );
};