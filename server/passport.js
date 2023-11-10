const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: '333825329155-4io2s46ts8eebr69sf9hhb9krvqhmspv.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
