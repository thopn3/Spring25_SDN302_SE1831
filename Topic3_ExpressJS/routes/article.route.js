const express = require("express");
const { ArticleController } = require("../controllers");
const router = express.Router(); // mini express

// Viết 1 custom Middleware check thời gian truy cập của các clients
const logTime = (req, res, next) => {
    console.log("Time: " + Date.now());
    next();
}

router.use(logTime);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Định tuyến cho các actions (CRUD)

// GET: /articles -> Get all Articles
router.get("/", ArticleController.findAll);

// GET: /:id -> Get a single Article
router.get("/:id", ArticleController.findOne);

// POST: /artitcles/create -> Add a new Article
router.post("/create", async (req, res) => {
    try {
        res.status(201).json({ "result": "Create a new Article" });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
});

// ....

module.exports = router;