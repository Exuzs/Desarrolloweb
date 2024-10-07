const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/html/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/login.html'));
});

router.get('/html/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/registro.html'));
});

router.get('/html/catalogo.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/catalogo.html'));
});

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
