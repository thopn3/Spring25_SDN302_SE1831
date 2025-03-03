// Hàm xử lý theo phương pháp bất đồng bộ (Asynchronous) có sử dụng callback
function linearEquation(a, b, callback){
    if(a==0){
        if(b===0)
            callback("PT có vô số nghiệm", null);
        else
            callback("PT vô nghiệm", null);
    }else{
        callback(null, [(-b/a).toFixed(2)]); // null TH này là không có lỗi
    }
}

module.exports = linearEquation;