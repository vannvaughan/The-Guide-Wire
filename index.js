const express = require('express')
    , cors = require('cors')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    // , port = 3000
    , app = express()
    , masterRoutes = require('./masterRoutes.js')
    // , config = require('./server/config.js')

app.use(cors())
app.use(bodyParser.json())
// app.use(session(config.session))

masterRoutes(app);

app.use("/", express.static(__dirname + '/public'))
massive(process.env.DATABASE_URL).then(dbInstance => {
    app.set('db', dbInstance)
})


app.listen(process.env.PORT, function(){
    console.log('TTHHIIISS ISSS MYYY BOOOM STICK!!!')
})