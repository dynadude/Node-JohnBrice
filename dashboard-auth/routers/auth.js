"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_2.Router)();
router.use(express_1.default.json());
router.get('/github', passport_1.default.authenticate("github", { scope: ["user:email"] }));
router.get('/github/callback', auth_1.gitHubCallback);
router.get('/failed', (req, res) => {
    res.send('login failed');
});
exports.default = router;
