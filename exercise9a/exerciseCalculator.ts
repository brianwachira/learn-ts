// periodLength : length of array
// training days : any number that is greater than 0
// success : comparison btn keyed in value & avg
// rating : a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own.
// ratingDescription : 
// target : target
// average : average based on all values inside array

// { periodLength: 7,
//     trainingDays: 5,
//     success: false,
//     rating: 2,
//     ratingDescription: 'not too bad but could be better',
//     target: 2,
//     average: 1.9285714285714286 }

interface calcValues {
    value1: number;
    value2: number;
    value3: number;
    value4: number;
    value5: number;
    value6: number;
    value7: number;
    value8: number;
    value9: number;
    value10: number;
}

const parseArguments2 = (args: Array<string>): calcValues => {
    if (args.length < 12) throw new Error('Not enough arguments');
    if (args.length > 12) throw new Error('Too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        return {
            value1: Number(args[2]),
            value2: Number(args[3]),
            value3: Number(args[4]),
            value4: Number(args[5]),
            value5: Number(args[6]),
            value6: Number(args[7]),
            value7: Number(args[8]),
            value8: Number(args[9]),
            value9: Number(args[10]),
            value10: Number(args[11])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }

}

interface exerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const exerciseCalculator = (a: number[], targetNumber: number) : exerciseResults => {

    const periodLength = a.length;
    const aWithoutZero = a.filter(number => number !== 0);
    const trainingDays = aWithoutZero.length;

    const reducer = (accumulator : number, currentValue : number) => accumulator + currentValue;
    const sum = a.reduce(reducer);
    const rating = 2;
    const ratingDescription = 'not too bad but could be better'
    const target= targetNumber;
    const average = sum/periodLength;
    const success = target === average ? true : false;
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }

}

try{
    const {value1,value2,value3,value4,value5,value6,value7,value8,value9} = parseArguments2(process.argv);

    console.log(exerciseCalculator([value2, value3, value4, value5, value6, value7,value8,value9],value1))
} catch (error) {
    console.log('Error, something bad happened, message: ', error.message)
}


