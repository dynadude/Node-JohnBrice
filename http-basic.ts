import http from 'http';

const HOST = 'localhost';
const PORT = '8080';

const server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({Name: "Shai Manor"}, null, 3));
});

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
