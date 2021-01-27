
const Article = require('../models/Article')

module.exports = {
    async index(req, res){
        const articles = await Article.find().sort({ createdAt: 'desc' })

        res.render('index', { articles: articles })
    },
    async newPage(req, res){

        res.render('new', { article: new Article() })
        
    },

    async store(req, res) {

        const article = await Article.create(req.body)

        res.redirect(`/article/${article._id}`)
    },

    async show(req, res) {
        const article = await Article.findById(req.params.id)

        res.render('article', { article: article })
    },

    async updatePage(req, res) {
        const article = await Article.findById(req.params.id)

        res.render('edit', { article: article })
    },
    async update(req, res) {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.redirect(`/article/${article._id}`)
    },

    async destroy(req, res) {
        await Article.findByIdAndRemove(req.params.id)

        res.redirect('/')
    }
    
}