const express = require('express');
const router = express.Router();
const createConnection = require('./database');
const connection = createConnection();
const crud = require('./controllers/crud');

router.use((req, res, next) => {
  res.locals.datos = req.session.datos; // Establece res.locals para que esté disponible en las vistas
  next();
});

router.get('/editUser/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM usuarios WHERE idUsuario=?', [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('editUser.ejs', { user: results[0],datos:res.locals.datos });
    }
  });
});


router.get('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM usuarios WHERE idUsuario = ?', [id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/dashboard/UsersControlAdmin');
    }
  });
});

router.get('/editClient/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM clientes WHERE noCliente= ?', [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      connection.query('SELECT nombreBloque FROM bloques', (error, results2) => {
      if (error) {
        throw error;
      } else {
        const opcionesBloque = results2.map(row => row.nombreBloque ); 
        res.render('editClient.ejs', { client: results[0],datos:res.locals.datos,opcionesBloque });
      }
    });
     
    }
  });
});


router.get('/deleteClient/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM clientes WHERE noCliente = ?', [id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/carteraClientes');
    }
  });
});




router.post('/saveUser', crud.saveUser);
router.post('/updateUser', crud.updateUser);
router.post('/saveClient', crud.saveClient);
router.post('/updateClient',crud.updateClient);


module.exports = router;
