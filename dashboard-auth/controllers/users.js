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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSymbol = void 0;
const addSymbol = (symbol) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.dbPool.execute(`
		INSERT INTO users_symbols(user_id, symbol)
		values(?, ?)
	`, [1, "PND"], (err, data) => {
        if (err) {
            next(err);
            return;
        }
        console.log(data);
        next();
    });
});
exports.addSymbol = addSymbol;
