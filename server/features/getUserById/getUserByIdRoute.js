const getUserByIdCtrl = require('./getUserByIdCtrl')

module.exports = app => {
    app.get('/api/user/:id', getUserByIdCtrl.getUserById)
}