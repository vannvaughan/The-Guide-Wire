const profileCtrl = require('./profileCtrl.js')

module.exports = app => {
    app.post('/api/user', profileCtrl.findUser, profileCtrl.createProfile);
    app.get('/api/guideReviews', profileCtrl.getGuideReviews, profileCtrl.postGuideReview);
}