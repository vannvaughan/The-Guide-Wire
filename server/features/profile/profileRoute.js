const profileCtrl = require('./profileCtrl.js')

module.exports = app => {
    app.post('/api/user', profileCtrl.findUser, profileCtrl.createProfile);
    app.get('/api/guideReviews/:id', profileCtrl.getGuideReviews);
    app.post('/api/guideReviews', profileCtrl.postGuideReview)
}