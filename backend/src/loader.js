const app = require('./config/app')
require('./config/db')
require('./config/routes')(app)