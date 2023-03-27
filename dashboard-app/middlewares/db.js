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
exports.connectToMongoDb = exports.connectToMySqlDb = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
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
const connectToMySqlDb = (pool = connectionPool) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.dbPool = pool;
    next();
});
exports.connectToMySqlDb = connectToMySqlDb;
const coinSchemaObject = {
    symbol: String,
    value: Number,
    scrapedAt: Date
};
function mongoCreateCoinSchema() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb://${config_1.default.get("config.mongo.db")}:${config_1.default.get("config.mongo.port")}`);
            let coinSchema = new mongoose_1.default.Schema(coinSchemaObject);
            let mongoModel = mongoose_1.default.model("Coin Schema", coinSchema);
            let mongoInstance = new mongoModel({ symbol: "FID", value: 2, scrapedAt: Date.now() });
            mongoInstance.save();
        }
        catch (err) {
            console.log(err);
        }
    });
}
;
mongoCreateCoinSchema();
const connectToMongoDb = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(`mongodb://${config_1.default.get("config.mongo.db")}:${config_1.default.get("config.mongo.port")}`);
    next();
});
exports.connectToMongoDb = connectToMongoDb;
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
