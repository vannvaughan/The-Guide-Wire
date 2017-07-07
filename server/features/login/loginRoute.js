const loginCtrl = require('./loginCtrl')

module.exports = app => {
    app.post('/api/login', loginCtrl.login)
}