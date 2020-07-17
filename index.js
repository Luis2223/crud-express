const express = require('express');

const app = express();

const users = ['Luis', 'Felipe', 'Maria', 'Joana'];

app.get('/', (req, res) => {
	return res.json(users);
});

app.post('/', (req, res) => {
	const { name } = req.body;
    users.push(name);
    return res.json(users);
});

app.put('/:index', (req, res) => {
	const { name } = req.body;
    const { index } = req.params;

    users[index] = name;

    return res.json(users);
});

app.delete('/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    
    return res.json(users);
});

app.listen(3333);