// Different ways to declare a function

// Solution 1 - any
// OK, this is the most ugly way to achieve it, you can simply declare a variable as any type, then later, you can assign a function to it. It’s not recommend.

let a: any;

a = function(): void {
  console.log("It works");
};

// Solution 2 - Function
// Sometimes, when you design the interfaces, you have no idea what the actual signature will be, but instead declaring a ‘any’ type, you can use a keyword ‘Function’, so you can take advantage of the type checking later.

let a1: Function;

a1 = function(): void {
  console.log("It works");
};

//OK. So now when you want assign a value other than function to this variable ‘a’, the compiler will throw an error :

//Type ‘xxxxx’ is not assignable to type ‘Function’.

//Solution 3 - More specific signature:
//Now, as your projects goes on, you have whole idea of what’s going on there. So you can go back and modify your declaration to a more precise version using the fancy arrow function syntax, feel free to use it, it marked as ‘standard’ in ECMA2015.

let a2: (para: string) => string;
a2 = function(pass: string): string {
  return pass;
};

//The syntax here is very simple, it is just like the lambda function in Java or C#, the ‘string’ after the arrow is the type of the return value. The para: string defines the type of the parameter. It takes a string and return a string.

//Solution 4 - Use type
//We can use type to declare a function type:

type read1 = (name: string) => void;

const test1: read1 = (value: string) => {
  console.log(value);
};

//Solution 5 - Interface them all
// We are Typescript, we’d love to use the beloved interface for everything, well, you can, for just a function.

interface read2 {
  (name: string): string;
}

const test: read2 = (value: string) => value;