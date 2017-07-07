const profileRoute = require('./server/features/profile/profileRoute.js')
    , loginRoute = require('./server/features/login/loginRoute.js')

module.exports = app => {
    profileRoute(app);
    loginRoute(app);
}