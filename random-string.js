"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
for (let i = 0; i < 5; i++) {
    let letter = String.fromCharCode((0, crypto_1.randomInt)(1, 26) + 64);
    if ((0, crypto_1.randomInt)(1, 2) == 1) {
    }
}
