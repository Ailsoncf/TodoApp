const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://ailson:ailson@cluster0-462ws.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})