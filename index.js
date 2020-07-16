const express = require('express');

const app = express();

const users = ['Luis', 'Felipe', 'Maria', 'Joana'];

app.get('/', (req, res) => {
	return res.json(users);
});

app.listen(3333);