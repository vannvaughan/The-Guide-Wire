const profileRoute = require('./server/features/profile/profileRoute.js')
    , loginRoute = require('./server/features/login/loginRoute.js')
    , getUserByIdRoute = require('./server/features/getUserById/getUserByIdRoute.js')
    

module.exports = app => {
    profileRoute(app);
    loginRoute(app);
    getUserByIdRoute(app);
}