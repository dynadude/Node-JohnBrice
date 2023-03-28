import { Request, Response } from 'express';
import passport from 'passport';
const GitHubStrategy = require('passport-github2').Strategy;
import config from 'config';

type VerifyCallback = (err?: Error | null, user?: Express.User, info?: object) => void;

// create the passport github strategy (runs once, not on every request)
passport.use(
	new GitHubStrategy({
		clientID: config.get('github.clientId'),
		clientSecret: config.get('github.secret'),
		callbackURL: `http://localhost:${config.get('port')}/auth/github/callback`,
	}, (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
		console.log('authentication');
		done(null, profile.id);
	})
);

export const gitHubCallback = async (req: Request, res: Response, next: Function) => {
	await passport.authenticate("github", { failureRedirect: "/failed" });

	res.redirect("/../users/dashboard");
}
