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
exports.gitHubCallback = void 0;
const passport_1 = __importDefault(require("passport"));
const GitHubStrategy = require('passport-github2').Strategy;
const config_1 = __importDefault(require("config"));
// create the passport github strategy (runs once, not on every request)
passport_1.default.use(new GitHubStrategy({
    clientID: config_1.default.get('github.clientId'),
    clientSecret: config_1.default.get('github.secret'),
    callbackURL: `http://localhost:${config_1.default.get('port')}/auth/github/callback`,
}, (accessToken, refreshToken, profile, done) => {
    console.log('authentication');
    done(null, profile.id);
}));
const gitHubCallback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield passport_1.default.authenticate("github", { failureRedirect: "/failed" });
    res.redirect("/../users/dashboard");
});
exports.gitHubCallback = gitHubCallback;
