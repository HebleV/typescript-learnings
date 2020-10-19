function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        const total = num1 + num2;
        console.log(phrase + total)
    } else {
        return num1 + num2;
    }

}

const printResult = true;
const resultPhrase = 'Result is ';

add(1, 2, printResult, resultPhrase);