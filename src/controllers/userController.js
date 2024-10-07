const userRepository = require('../repositories/userRepository.js'); // Asegúrate de la ruta correcta

const registerUser = async (req, res) => {
    const { name, cedula, email, newUsername, newPassword } = req.body;

    try {
        // Verificar si el nombre de usuario ya existe
        const existingUser = await userRepository.findUserByUsername(newUsername);
        if (existingUser) {
            return res.send(`<script>alert("El nombre de usuario ya está en uso."); window.location.href = '/html/registro.html';</script>`);
        }

        await userRepository.insertUser(name, cedula, email, newUsername, newPassword);
        res.redirect('/html/login.html'); // Redirigir al login después de registrarse
    } catch (error) {
        console.error(error);
        res.send('<script>alert("Ocurrió un error durante el registro."); window.location.href = "/html/registro.html";</script>');
    }
};

const loginUser = async (req, res) => {
    const { newUsername, newPassword } = req.body;

    try {
        const user = await userRepository.authenticateUser(newUsername, newPassword);
        if (!user) {
            return res.send(`<script>alert("Usuario o contraseña incorrectos."); window.location.href = '/html/login.html';</script>`);
        }

        res.redirect('/html/catalogo.html'); // Redirigir al catálogo si el inicio de sesión es exitoso
    } catch (error) {
        console.error(error);
        res.send('<script>alert("Ocurrió un error en el inicio de sesión."); window.location.href = "/html/login.html";</script>');
    }
};

module.exports = {
    registerUser,
    loginUser,
};
