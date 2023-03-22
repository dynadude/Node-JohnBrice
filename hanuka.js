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
const sagi = (dayNumber) => __awaiter(void 0, void 0, void 0, function* () {
    if (dayNumber < 1) {
        throw "The day must be higher or equal to 1";
    }
    if (dayNumber > 8) {
        throw "There is no Isru chag for hanuka";
    }
    return dayNumber + 1;
});
const totalCandles = (maxDayNumber = 8, candleFunction = sagi) => __awaiter(void 0, void 0, void 0, function* () {
    let sum = 0;
    let candleJobs = [];
    for (let i = 1; i <= maxDayNumber; i++) {
        candleJobs.push(candleFunction(i));
    }
    for (let i = 0; i < maxDayNumber; i++) {
        sum += yield candleJobs[i];
    }
    return sum;
});
(() => __awaiter(void 0, void 0, void 0, function* () { console.log(yield totalCandles()); }))();
