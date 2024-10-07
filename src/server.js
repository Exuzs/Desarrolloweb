const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/html/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/html/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registro.html'));
});

app.get('/html/catalogo.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/catalogo.html'));
});

app.get('/html/confirmacion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/confirmacion.html'));
});

// Usar las rutas de usuario
app.use('/user', userRoutes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
