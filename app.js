function add(num1, num2, showResult, phrase) {
    if (showResult) {
        var total = num1 + num2;
        console.log(phrase + total);
    }
    else {
        return num1 + num2;
    }
}
var printResult = true;
var resultPhrase = 'Result is ';
add(1, 2, printResult, resultPhrase);
