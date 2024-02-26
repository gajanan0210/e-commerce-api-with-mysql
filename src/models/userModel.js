const db = require('../db');

const User = {
  getByEmail: async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.query(query, [email]);
    return rows[0];
  },
  register: async (email, password, firstName, lastName) => {
    const query = 'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [email, password, firstName, lastName]);
    return { id: result.insertId, email, firstName, lastName };
  },
  
};

module.exports = User;
