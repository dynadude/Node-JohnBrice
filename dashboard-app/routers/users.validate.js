"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.coinValidator = joi_1.default.object({
    name: joi_1.default.string()
        .pattern(new RegExp('^[A-Z]{3}$'))
        .required()
        .uppercase()
});
