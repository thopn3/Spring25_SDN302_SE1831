async function linearEquation(a, b){
    if(a===0){
        if(b===0)
            throw new Error("PT có vô số nghiệm");
        else
            throw new Error("PT vô nghiệm");
    }else{
        return [(-b/a).toFixed(2)];
    }
}

module.exports = linearEquation;