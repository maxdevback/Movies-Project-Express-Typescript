import passport from "passport";
import { App } from "./App";
import session from "express-session";
import { Strategy as GithubStrategy } from "passport-github2";
import { configFromEnv } from "./config";

export const passportInit = () => {
  App.use(
    session({
      secret: configFromEnv.COOKIE_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
  App.use(passport.initialize());
  App.use(passport.session());
  passport.use(
    new GithubStrategy(
      {
        clientID: configFromEnv.GITHUB_CLIENT,
        clientSecret: configFromEnv.GITHUB_SECRET,
        callbackURL: "",
      },
      (aToken: any, rToken: any, profile: any, cd: any) => {
        cd(null, profile);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user: any, done) => {
    done(null, user);
  });
};
