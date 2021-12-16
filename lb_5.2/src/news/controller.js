const News = require('./model');

const newsController = {
    getAll: (req, res) => {
        res.send(News);
    },

    getQuery: (req, res) => {
        let queryNews = News;
        if (req.query.country)
        queriedNews = queriedNews.filter((news) => 
            news.country.includes(req.query.views)
            );
        if (req.query.date)
        queriedNews = queriedNews.filter((news) => 
            news.date.includes(req.query.date)
            );
        res.send(queriedNews);
},

    getById:  (req, res) => {
        let news = News.find((news) => news.id === parseInt(req.params.id));
        if (news !== null) res.status(200).send(book);
        else res.status(404).send("Not Found");
},

    delete: (req, res) => {
        let index = News.findIndex((news) => news.id === parseInt(req.params.id));
        if (index >= 0) {
        let deletedNews = News[index];
        News.splice(index, 1);
        res.send(deletedNews);
        } else res.status(404).send("Not Found");
},

    post: (req, res) => {
        let newNews = {
            id: Number(Date.now()),
            ...req.body,
        };
        News.push(newNews);
        res.send(newNews);
},
    patch: (req, res) => {
        let index = News.findIndex((news) => news.id === parseInt(req.params.id));
        if (index >= 0) {
            let updatedNews = News[index];
            for (let key in updatedNews)
                if (req.body[key]) updatedNews[key] = req.body[key];
            res.send(updatedNews);
        } else res.status(404).send("Not Found");
    }
};

module.exports = newsController;
