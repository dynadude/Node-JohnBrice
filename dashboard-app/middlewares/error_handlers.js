"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
function handleError(err, req, res, next) {
    res.status(err.status || 400);
    res.send(err.message);
}
exports.handleError = handleError;
