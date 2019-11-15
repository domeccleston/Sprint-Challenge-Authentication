const db = require('../database/dbConfig');

function findById(id) {
    return db('users').where({ id }).first();
}

function findBy(parameter) {
    return db('users').where(parameter);
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

module.exports = {
    findById,
    addUser,
    findBy,
}