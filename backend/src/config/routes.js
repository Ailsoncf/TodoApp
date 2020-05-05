const { Router } = require('express')

module.exports = (app) => {
    const router = Router()
    app.use('/api', router)

    const todoService = require('./models/todoService')
    todoService.register(router, '/todos')
}