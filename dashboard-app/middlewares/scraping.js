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
exports.getFirstValueFromSiteByClasses = exports.getFirstValueFromSiteByIds = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
function loadSite(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = (yield axios_1.default.get(url)).data;
        return ((0, cheerio_1.load)(response));
    });
}
const getFirstValueFromSiteByIds = (url, ids, elementType = "div") => __awaiter(void 0, void 0, void 0, function* () {
    let $ = yield loadSite(url);
    if (!$) {
        return null;
    }
    let idsString = ids.join('#');
    // get the value from a div that has very weird class names
    return $(`${elementType}#${idsString}`).text();
});
exports.getFirstValueFromSiteByIds = getFirstValueFromSiteByIds;
const getFirstValueFromSiteByClasses = (url, classNames, elementType = "div") => __awaiter(void 0, void 0, void 0, function* () {
    let $ = yield loadSite(url);
    if (!$) {
        return null;
    }
    let classesString = classNames.join('.');
    // get the value from a div that has very weird class names
    let value = $(`${elementType}.${classesString}`).text();
    if (!value) {
        throw { status: 522, message: "Value Not Found!" };
    }
    return value;
});
exports.getFirstValueFromSiteByClasses = getFirstValueFromSiteByClasses;
