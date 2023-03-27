"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogonError = exports.authenticate = void 0;
function authenticate(req, res, next) {
    if (req.headers.authorization !== "Bearer 123") {
        res.status(401);
        res.send("Ya Maniak!!!");
        return;
    }
    next();
}
exports.authenticate = authenticate;
function handleLogonError(err, req, res, next) {
    if (err !== "No Token Specified") {
        next(err);
        return;
    }
    res.status(400);
    res.send("No Token Specified");
}
exports.handleLogonError = handleLogonError;
