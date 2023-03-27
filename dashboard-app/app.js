"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./middlewares/auth");
const loggers_1 = require("./middlewares/loggers");
const config_1 = __importDefault(require("config"));
const users_1 = __importDefault(require("./routers/users"));
const HOST = 'localhost';
const PORT = '8080';
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express_1.default.json());
app.use('/users', users_1.default);
app.use(auth_1.authenticate);
app.use(loggers_1.logPostRequests);
app.post('/', (req, res) => {
    res.send(`Password: ${config_1.default.get("config.mysql.password")}`);
});
app.get('/users/', (req, res, next) => {
    if (!req.query.id) {
        next("No Token Specified");
        return;
    }
    res.send(`Welcome ${req.query.id}`);
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
app.use(auth_1.handleLogonError);
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
