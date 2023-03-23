import express from 'express';

const HOST = 'localhost';
const PORT = '8080';
const app = express();

app.post('/user', (req, res) => {
    res.send("Sagi");
});

app.delete('/ticket', (req, res) => {
    res.send("Iron Man");
});

app.patch('/employee', (req, res) => {
    res.send("Shai Manor");
});

app.put('/organization', (req, res) => {
    res.send("John Bryce");
});

app.all('/*', (req, res) => {
    res.status(404);
    res.send("Kama Od");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});