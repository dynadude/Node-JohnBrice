"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HOST = 'localhost';
const PORT = '8080';
const app = (0, express_1.default)();
app.use(express_1.default.json());
function authenticate(req, res, next) {
    if (req.headers.authorization !== "Bearer 123") {
        res.status(401);
        res.send("Ya Maniak!!!");
        return;
    }
    next();
}
function logPostRequests(req, res, next) {
    if (req.method !== "POST") {
        next();
        return;
    }
    res.on('finish', () => {
        console.log(`Endpoint: ${req.url} Status: ${res.statusCode}`);
    });
    next();
}
app.use(authenticate);
app.use(logPostRequests);
app.post('/', (req, res) => {
    res.send(`Welcome ${req.body.name}`);
});
app.get('/query/', (req, res) => {
    res.send(`Welcome ${req.query.id}`);
});
app.delete('/ticket/:id', (req, res) => {
    res.send(`Welcome ${req.params.id}`);
});
app.patch('/employee/:id', (req, res) => {
    res.send(`Welcome ${req.params.id}`);
});
app.put('/organization/:id', (req, res) => {
    res.send(`Welcome ${req.params.id}`);
});
app.all('/*', (req, res) => {
    res.status(404);
    res.send("Kama Od");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
