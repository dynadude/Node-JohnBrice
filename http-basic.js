"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HOST = 'localhost';
const PORT = '8080';
const app = (0, express_1.default)();
app.post('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Welcome ${req.params.id}`);
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
