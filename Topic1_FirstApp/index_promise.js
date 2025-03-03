const linearEquation = require("./linearEquation_promise.js");

linearEquation(0, 3)
    .then(result => console.log("Nghiệm là: " + result))
    .catch(err => console.log("Error: " + err));