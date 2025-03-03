function linearEquation(a, b){
    return new Promise((rel, rej) => {
        if(a === 0){
            if(b===0)
                rej("PT có vô số nghiệm");
            else
                rej("PT vô nghiệm");
        }else{
            rel([(-b/a).toFixed(3)]);
        }
    });
}

module.exports = linearEquation;