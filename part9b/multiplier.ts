// const multiplicator = (a: number, b: number, printText: string) => {
//     console.log(printText, a * b);
// }

//multiplicator(2,4, 'Multiplied numbers 2 and 4, the result is:');

// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])

// multiplicator(a,b, `Multiplied ${a} and ${b}, the result is:`);

// type Operation = 'multiply' | 'add' | 'divide';

// type Result = string | number;

// const calculator = (a: number, b: number, op: Operation): Result => {

//     switch(op) {
//         case 'multiply':
//             return a * b;
//         case 'divide':
//             if( b === 0) throw new Error('Can\'t divide by 0!');
//             return a / b;
//         case 'add':
//             return a + b;
//         default:
//             throw new Error('Operation is not multiply, add or divide!');
//     }
// }

// try {
//     console.log(process.argv)
// } catch(e) {
//     console.log('Something went wrong, error message: ', e.message);
// }

// calculator(1,4, 'yolo')

interface MultiplyValues {
    value1: number;
    value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }    
};

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
};

try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}