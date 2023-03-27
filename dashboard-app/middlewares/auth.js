"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
function authenticate(req, res, next) {
    if (req.headers.authorization !== "Bearer 123") {
        res.status(401);
        res.send("Ya Maniak!!!");
        return;
    }
    next();
}
exports.authenticate = authenticate;
