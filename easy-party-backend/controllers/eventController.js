const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'projetoAplicado'
});

exports.addEvent = (req, res) => {
  const {
    eventName,
    startDateTime,
    endDateTime,
    ageRange,
    cep,
    street,
    city,
    state
  } = req.body;

  const INSERT_EVENT_QUERY = 'INSERT INTO events (eventName, startDateTime, endDateTime, ageRange, cep, street, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(
    INSERT_EVENT_QUERY,
    [eventName, startDateTime, endDateTime, ageRange, cep, street, city, state],
    (error, results, fields) => {
      if (error) {
        console.error('Erro ao adicionar evento:', error);
        return res.status(500).json({ error: 'Erro ao adicionar evento' });
      }
      return res.status(201).json({ message: 'Evento adicionado com sucesso!' });
    }
  );
};
