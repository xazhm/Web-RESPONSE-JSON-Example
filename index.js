const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Halo, dunia!');
});

app.get('/api/respon', (req, res) => {
    const { text } = req.query;
    const response = merespon(text);
    const jsonResponse = { response: response };
    res.json(jsonResponse);
});

app.post('/api/respon', (req, res) => {
    const { text } = req.body;
    const response = merespon(text);
    const jsonResponse = { response: response };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

function merespon(text) {
    var response = '';

    if (text === 'halo') {
        response = 'halo juga';
    } else if (text === 'pagi') {
        response = 'pagi juga';
    } else if (text === 'malam') {
        response = 'malam juga';
    } else if (text === 'hai') {
        var randomIndex = Math.floor(Math.random() * 2);
        if (randomIndex === 0) {
            response = 'hey';
        } else {
            response = 'halo';
        }
    } else {
        var randomIndex = Math.floor(Math.random() * 5);
        if (randomIndex === 0) {
            response = 'kata apa itu?';
        } else if (randomIndex === 1) {
            response = 'saya belum bisa menjawab';
        } else if (randomIndex === 2) {
            response = 'beri saya waktu untuk menjawab';
        } else if (randomIndex === 3) {
            response = 'saya belum memiliki jawaban';
        } else if (randomIndex === 4) {
            response = 'apa itu?';
        }
    }

    return response;
}