"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const HOST = 'localhost';
const PORT = '8080';
const server = http_1.default.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ Name: "Shai Manor" }, null, 3));
});
server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
