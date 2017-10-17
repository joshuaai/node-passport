const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user = {
  username: 'test-user',
  password: 'test-password',
  id: 1
};

passport.use(new LocalStrategy((username, password, done) => {
  findUser(username, (err, user) => {
    if (err) {
      done(err);
    }
    if (!user) {
      done(null, false);
    }
    if (password != user.password) {
      done(null, false)
    }
    done(null, user);
  });
}))