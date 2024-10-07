function isValidName(name) {
    const regex = /^[a-zA-Z\s]+$/; 
    return regex.test(name);
}

function isValidCedula(cedula) {
    const regex = /^\d+$/;
    return regex.test(cedula);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidUsername(username) {
    return username.length >= 3;
}

function isValidPassword(password) {
    return password.length >= 6;
}

function registerValidation(name, cedula, email, username, password) {
    const errors = [];
    if (!isValidName(name)) errors.push('El nombre no es válido.');
    if (!isValidCedula(cedula)) errors.push('La cédula no es válida.');
    if (!isValidEmail(email)) errors.push('El correo electrónico no es válido.');
    if (!isValidUsername(username)) errors.push('El nombre de usuario debe tener al menos 3 caracteres.');
    if (!isValidPassword(password)) errors.push('La contraseña debe tener al menos 6 caracteres.');
    return errors;
}

function loginValidation(username, password) {
    const errors = [];
    if (!username || !password) {
        errors.push('Todos los campos son obligatorios.');
    }
    if (!isValidUsername(username)) {
        errors.push('El nombre de usuario no es válido.');
    }
    if (!isValidPassword(password)) {
        errors.push('La contraseña no es válida.');
    }
    return errors;
}

module.exports = {
    registerValidation,
    loginValidation,
};


