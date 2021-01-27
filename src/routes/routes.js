const express = require('express')

const routes = express.Router()

const ArticleController = require('../controllers/ArticleController')

routes.get('/', ArticleController.index)
routes.get('/article/new', ArticleController.newPage)
routes.post('/article', ArticleController.store)
routes.get('/article/:id', ArticleController.show)
routes.get('/article/edit/:id', ArticleController.updatePage)
routes.post('/article/delete/:id', ArticleController.destroy)
routes.post('/article/edit/:id', ArticleController.update)
module.exports = routes