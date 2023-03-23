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
const http_1 = __importDefault(require("http"));
const HOST = 'localhost';
const PORT = '8080';
//function JSONArrayToCSV(array: Array<Object>) {
//    let csv: string = "";
//    let firstKeys = Object.keys(array[0]);
//
//    csv += firstKeys.join(', ');
//
//    for (let i = 0; i < array.length; i++) {
//	let keys = Object.keys(array[i])
//
//	for (let key in array[i]) {
//	    if (array[i][key]) {
//	    }
//	    console.log(array[i][key]);
//	}
//    }
//}
const server = http_1.default.createServer(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let method = req.method;
        let url = req.url;
        if (method == "GET" && url == '/age') {
            res.writeHead(200);
            res.end("20");
            return;
        }
        if (method == "POST" && url == '/name') {
            res.writeHead(200);
            res.end("sagi");
            return;
        }
        res.writeHead(404);
        res.end("Kama Od");
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
