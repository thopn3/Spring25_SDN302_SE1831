const linearEquation = require("./linearEquation_callback.js");

// Gọi hàm
linearEquation(0, 0, (err, result)=>{
    if(err)
        console.log("Eror: " + err);
    else
        console.log("Nghiệm là: "+ result);    
});