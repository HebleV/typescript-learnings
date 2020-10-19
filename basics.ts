function addition(num1: number, num2: number, showResult: boolean, phrase: string) {
    const total = num1 + num2;
    if (showResult) {
        console.log(phrase + total)
    } else {
        return total;
    }

}

const printResult = true;
const resultPhrase = 'Result is ';

addition(1, 2, printResult, resultPhrase);