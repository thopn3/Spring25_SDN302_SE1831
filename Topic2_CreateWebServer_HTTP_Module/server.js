// Khai báo module "http" -> Tạo simple Web server
const http = require("http");
// Khai báo thông tin cấu hình của web server
const hostname = "localhost";
const port = 9999;

// Tạo 1 web server
const server = http.createServer((req, res)=>{
    // Thiết lập thông tin cho Response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    // Gửi body của response về clients
    res.end("<h1>Welcome to Web Server - NodeJS</h1>");
});

// Lắng nghe các clients gửi request tới web server
server.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
})