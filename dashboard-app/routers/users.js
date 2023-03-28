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
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const coins_1 = require("../controllers/coins");
const joi_1 = __importDefault(require("../middlewares/joi"));
const users_validate_1 = require("./users.validate");
const db_1 = require("../middlewares/db");
const users_1 = require("../controllers/users");
const router = (0, express_2.Router)();
router.use(express_1.default.json());
router.get('/welcome', (req, res) => {
    res.render('users/welcome');
});
router.get('/dashboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('users/dashboard', {
        coins: yield (0, coins_1.getCoinValues)(['ILS', 'USD', 'ETH'])
    });
}));
router.post('/symbol', (0, joi_1.default)(users_validate_1.coinValidator), (0, db_1.connectToMySqlDb)(), (req, res, next) => { (0, users_1.addSymbol)(req.body.name); next(); }, (req, res) => {
    res.send("Nice!");
});
router.get('/query', (0, db_1.connectToMySqlDb)(), (req, res) => {
    res.send("Connected to DB");
});
router.get('/getValue/:coin', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let value = (0, coins_1.getCoinValue)(req.params.coin);
        res.send(value);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
