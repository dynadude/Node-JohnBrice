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
const howManyCandles = (dayNumber) => __awaiter(void 0, void 0, void 0, function* () {
    if (dayNumber < 1) {
        throw "The day must be higher or equal to 1";
    }
    if (dayNumber > 8) {
        throw "There is no Isru chag for hanuka";
    }
    return dayNumber + 1;
});
const totalCandles = (maxDayNumber = 8, candleFunction = howManyCandles) => __awaiter(void 0, void 0, void 0, function* () {
    let sum = 0;
    let candlePromises = [];
    // create the Promises
    for (let i = 1; i <= maxDayNumber; i++) {
        candlePromises.push(candleFunction(i));
    }
    // get the outputs of the Promises
    for (let i = 0; i < maxDayNumber; i++) {
        sum += yield candlePromises[i];
    }
    return sum;
});
function main() {
    (() => __awaiter(this, void 0, void 0, function* () { console.log(yield totalCandles()); }))();
}
main();
