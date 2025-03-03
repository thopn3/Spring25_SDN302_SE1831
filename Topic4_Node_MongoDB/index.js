// Khai báo module "mongodb"
const {MongoClient} = require("mongodb");

// Khai báo thông tin cấu hình của MongoDB Server
const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "SE1831DB";

// Khởi tạo đối tượng kết nối kiểu MongoClient
const connection = new MongoClient(mongoURL);

async function connectDb(){
    try {
        await connection.connect();
        console.log("Connect to MongoDB success!");
        // Chỉ định CSDL cần làm việc
        const myDb = connection.db(dbName);
        // Chỉ định collection cần làm việc -> CRUD
        const productsCollection = myDb.collection("products");
        // Thực thi các actions (CRUD)
        await createProduct(productsCollection, {
            name: "New Product 1",
            price: 250,
            quantity: 150,
            category: "Category 1"
        });
        console.log("Done!");
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Action: Chèn 1 đối tượng (document) -> collection (products)
async function createProduct(collectionName, newDoc){
    try {
        await collectionName.insertOne(newDoc)
            .then(async result => {
                const newId = result.insertedId;
                console.log(await collectionName.findOne({_id: newId}))
            });
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

// Thực thi hoạt động kết nối
connectDb()
    .then(()=>console.log)
    .catch(error => console.error(error));