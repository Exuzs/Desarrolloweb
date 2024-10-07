const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fastwheels',
    password: 'cambiarsegunseanecesario',
    port: 5432,
});

const findUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows.length > 0 ? result.rows[0] : null;
};

const insertUser = async (name, cedula, email, username, password) => {
    await pool.query(
        'INSERT INTO users (name, cedula, email, username, password) VALUES ($1, $2, $3, $4, $5)',
        [name, cedula, email, username, password]
    );
};

const authenticateUser = async (username, password) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE username = $1 AND password = $2',
        [username, password]
    );

    return result.rows.length > 0 ? result.rows[0] : null;
};

module.exports = {
    findUserByUsername,
    insertUser,
    authenticateUser,
};
