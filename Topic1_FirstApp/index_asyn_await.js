const linearEquation1 = require("./linearEquation_async_await.js");

const calcLinearEquation = async () => {
    let a = 0, b = 7;
    try {
        let result = await linearEquation1(a, b);
        console.log("Result: " + result);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

calcLinearEquation();