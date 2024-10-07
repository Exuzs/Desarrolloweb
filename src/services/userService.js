const userRepository = require('../repositories/userRepository');

const registerUser = async (name, cedula, email, username, password) => {
    const existingUser = await userRepository.findUserByUsername(username);
    if (existingUser) {
        throw new Error('El nombre de usuario ya está en uso.');
    }

    await userRepository.insertUser(name, cedula, email, username, password);
};

const authenticateUser = async (username, password) => {
    const user = await userRepository.authenticateUser(username, password);
    if (!user) {
        throw new Error('Usuario o contraseña incorrectos.');
    }
};

module.exports = {
    registerUser,
    authenticateUser,
};
