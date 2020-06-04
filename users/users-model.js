const db = require('../data/dbConfig.js');

function find() {
	return db('users').select('id', 'username');
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [id] = await db('users').insert(user, 'id');

	return findById(id);
}

module.exports = {
	find,
	findBy,
	add,
};
