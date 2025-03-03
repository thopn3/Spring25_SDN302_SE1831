// Giả lập đã có dữ liệu từ DB (thông qua model)
const articles = [
    {"id": 1, "title": "Article 1", "author": "Marry"},
    {"id": 2, "title": "Article 2", "author": "Tom"},
    {"id": 3, "title": "Article 3", "author": "Peter"}
];

// Get all articles
async function findAll(req, res){
    try {
        const result = articles?.map(a => ({
            "aId": a.id,
            "aTitle": a.title,
            "a.Author": a.author
        }));


        res.status(200).json({
            "message": "List of Articles",
            "result": result
        });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

// Get single article by id
async function findOne(req, res){
    try {
        const id = parseInt(req.params.id);
        const article = articles?.find(a => a.id == id);
        
        if(!article)
            res.status(404).json({"message": "Article not found!"});

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

module.exports = {
    findAll,
    findOne,
}