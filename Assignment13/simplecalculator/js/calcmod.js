exports.calculate = function calculate(req, res, query){
    const val1 = req.query;
    const first = parseInt(val1.first);
    const second = parseInt(val1.second);
    const operation = val1.operation;

    let result = 0;

    switch (operation) {
            case "add":
                result = first + second;
                break;
        
            case "sub":
                result = first - second;
                break;
            case "mul":
                result = first * second;
                break;
            case "div":
                result = first / second;
                break;
        default:
            res.send("Operation is invalid");
            break;
    }
    return result;
}