"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPostRequests = void 0;
function logPostRequests(req, res, next) {
    if (req.method !== "POST") {
        next();
        return;
    }
    res.on('finish', () => {
        console.log(`Endpoint: ${req.url} Status: ${res.statusCode}`);
    });
    next();
}
exports.logPostRequests = logPostRequests;
