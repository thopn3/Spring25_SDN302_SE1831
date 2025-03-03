// Khai báo sử dụng module 'express'
const express = require("express");
const morgan = require("morgan");
const { ArticleRouter } = require("./routes");
// Khởi tạo 1 Express web server 
const app = express();

// Gắn 3 middleware để kiểm soát định dạng dữ liệu trên web server
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

// Root router
app.get("/", async (req, res) => {
    try {
        res.status(200).json({"result": "Welcome to Express Web Server"});
    } catch (error) {
        res.send("Error: " + error.message);
    }
});

app.use("/articles", ArticleRouter);

// Viết 1 middleware (function) cắm (plug-in) vào server để kiểm soát những truy cập bất thường
app.use((req, res, next) => {
    res.status(404).json({"message":"Sorry, that route does'nt exist!"});
});

// Lắng nghe các requests từ clients
app.listen(9999, () => {
    console.log("Server running at: http://localhost:9999");
});
