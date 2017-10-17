const passport = require('passport');

app.get('/profle', passport.authenticationMiddleware(), renderProfle);