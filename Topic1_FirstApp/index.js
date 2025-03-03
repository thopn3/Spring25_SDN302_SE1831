// Viết 1 hàm giải phương trình bậc nhất 1 ẩn
const solveLinearEquation = (a, b) => {
    if(a===0){
        if(b===0){
            return "Phương trình có vô số nghiệm";
        }else{
            return "Phương trình vô nghiệm";
        }
    }else{
        let x = -b/a;
        return "Nghiem cua PT la: " + x.toFixed(2);
    }
}

// Thực thi gọi hàm
console.log(solveLinearEquation(0, 0));