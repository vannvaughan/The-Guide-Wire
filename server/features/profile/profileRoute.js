const profileCtrl = require('./profileCtrl.js')

module.exports = app => {
    app.post('/api/user', profileCtrl.findUser, profileCtrl.createProfile);
}