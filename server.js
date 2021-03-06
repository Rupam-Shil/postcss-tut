const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('./views/index.html', { root: __dirname });
});

app.listen(9000, () => {
	console.log('listening on port 9000');
});
