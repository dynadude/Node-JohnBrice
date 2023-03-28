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
exports.getCoinValues = exports.getCoinValue = void 0;
const scraping_1 = require("../middlewares/scraping");
const getCoinValue = (coin) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, scraping_1.getFirstValueFromSiteByClasses)(`https://www.google.com/finance/quote/${coin}-USD`, ['YMlKec', 'fxKbKc']);
});
exports.getCoinValue = getCoinValue;
const getCoinValues = (coinNames, errorValue = null) => __awaiter(void 0, void 0, void 0, function* () {
    let coins = [];
    for (let i = 0; i < coinNames.length; i++) {
        try {
            coins.push({ name: coinNames[i], value: yield (0, exports.getCoinValue)(coinNames[i]) });
        }
        catch (err) {
            console.log(err);
            coins.push({ name: coinNames[i], value: null });
        }
    }
    return coins;
});
exports.getCoinValues = getCoinValues;
