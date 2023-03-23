"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HOST = 'localhost';
const PORT = '8080';
const app = (0, express_1.default)();
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
