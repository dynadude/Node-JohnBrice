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
const http_errors_1 = __importDefault(require("http-errors"));
exports.default = (validator) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validated = yield validator.validateAsync(req.body);
        req.body = validated;
        return next();
    }
    catch (err) {
        //* Pass err to next
        //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
        if (err.isJoi) {
            return next((0, http_errors_1.default)(422, { message: err.message }));
        }
        return next((0, http_errors_1.default)(500));
    }
});
