"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
//let db: DbInterface = mysql;
//
//let connection = db.createConnection({
//	localAddress: "localhost",
//	user: "username",
//	password: "password",
//	database: "mydb"
//})
//
//connection.connect(() => {console.log("Connected")})
const connectionPool = mysql2_1.default.createPool({
    host: "localhost",
    user: "username",
    password: "password",
    database: "mydb",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
});
const connectToDb = (pool = connectionPool) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.dbPool = pool;
    next();
});
exports.connectToDb = connectToDb;
// TABLE CREATION
/*
connection.query(`
CREATE TABLE users (
    id int auto_increment,
    username varchar(255) not null,
    primary key (id)
)`)

connection.query(`
CREATE TABLE users_symbols (
    id int auto_increment,
    user_id int not null,
    symbol varchar(3) not null
    primary key (id)
)`)
connection.end()
*/
