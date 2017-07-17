const homeServerCtrl = require('./homeServerCtrl')

module.exports = app => {
 
 app.post('/api/guideReviews/:id', homeServerCtrl.postGuideReview);

}