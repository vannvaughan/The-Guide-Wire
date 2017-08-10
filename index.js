// require('dotenv').config()

const express = require('express')
    , cors = require('cors')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , port = 3000
    , app = express()
    , masterRoutes = require('./masterRoutes.js')
    , config = require('./server/config.js')

app.use(cors())
app.use(bodyParser.json())
app.use(session(config.session))

masterRoutes(app);

app.use("/", express.static(__dirname + '/public'))
massive(config.postgres).then(dbInstance => {
    console.log(dbInstance)
    app.set('db', dbInstance)
})


app.listen(port, function(){
    console.log('TTHHIIISS ISSS MYYY BOOOM STICK!!!')
})