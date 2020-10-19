function addition(num1, num2, showResult, phrase) {
    var total = num1 + num2;
    if (showResult) {
        console.log(phrase + total);
    }
    else {
        return total;
    }
}
var printResult = true;
var resultPhrase = 'Result is ';
addition(1, 2, printResult, resultPhrase);
