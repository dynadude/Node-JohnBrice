"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile('test.txt', null, (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(data.toString());
});
