// Khai báo sử dụng module 'express'
const express = require("express");
const morgan = require("morgan");
const {MongoClient, ObjectId} = require("mongodb");

const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "SE1831DB";

const app = express();
// Khởi tạo đối tượng kết nối kiểu MongoClient
const connection = new MongoClient(mongoURL);
let myDb = null;

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

// CRUD: /products
// GET: /list
app.get("/products/list", async(req, res)=>{
    try {
        const products = myDb.collection("products");
        const result = await products.find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
    }
});

// GET: /:id
app.get("/products/:id", async(req, res)=>{
    try {
        const products = myDb.collection("products");
        const result = await products.findOne({_id: new ObjectId(req.params.id)});
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
    }
});

// Viết 1 middleware (function) cắm (plug-in) vào server để kiểm soát những truy cập bất thường
app.use((req, res, next) => {
    res.status(404).json({"message":"Sorry, that route does'nt exist!"});
});

async function connectDb(){
    try {
        await connection.connect();
        myDb = connection.db(dbName);
        console.log("Connect to MongoDB success!");
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Lắng nghe các requests từ clients
app.listen(9999, () => {
    console.log("Server running at: http://localhost:9999");
    connectDb();
});
