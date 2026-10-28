const connection = require('../config/db');

function create(ownerId, name, species, breed, age, image, callback) {
  const sql = 'INSERT INTO pets (owner_id, name, species, breed, age, image) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [ownerId, name, species, breed, age, image], callback);
}

function findByOwnerId(ownerId, callback) {
  const sql = 'SELECT * FROM pets WHERE owner_id = ?';
  connection.query(sql, [ownerId], callback);
}

function findById(petId, callback) {
  const sql = 'SELECT * FROM pets WHERE id = ?';
  connection.query(sql, [petId], callback);
}

function findJournalsByOwnerId(ownerId, callback) {
  const sql = `
    SELECT journal.*, pets.id AS pet_id
    FROM journal
    JOIN pets ON journal.pet_id = pets.id
    WHERE pets.owner_id = ?
  `;
  connection.query(sql, [ownerId], callback);
}

module.exports = {
  create,
  findByOwnerId,
  findById,
  findJournalsByOwnerId
};
