const mysql = require('mysql2');

function createConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gasunion',
    // port: 25060
    
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error de conexión a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });

  return connection;
}

module.exports = createConnection;
