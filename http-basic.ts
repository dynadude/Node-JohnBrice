import express from 'express';

const HOST = 'localhost';
const PORT = '8080';
const app = express();

app.get('/age', (req, res) => {
    res.send("20");
});

app.post('/name', (req, res) => {
    res.send("sagi");
});

app.all('/*', (req, res) => {
    res.status(404);
    res.send("Kama Od");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
