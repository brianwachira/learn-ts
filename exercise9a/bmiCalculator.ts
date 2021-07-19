// BMI = mass/height
// underweight = BMI < 18.5
// normal =  BMI 18.5 ~ 25
// overweight = BMI > 25
//Formula: weight (kg) / [height (m)]2
//Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000


type Result = string | number;

const calculateBmi = (a: number, b: number) : Result => {
    //console.log((a/b/b) * 10000)
    return (a/b/b) * 10000;
};
interface BmiValues {
    value1: number;
    value2: number;
}
const parseArguments = (args: Array<string>): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

const BmiCalculator = (bmi : string | number) : Result => {


    switch(true) {
        case (bmi < 18.5):
            return 'Underweight (unhealthy weight)';
        case (bmi >18.5 && bmi <= 25):
            return 'Normal (healthy weight)';
        case (bmi > 25):
            return 'Overweight (unhealthy weight)';
        default:
            return 'Nothing to return';
    }
};

try {
    const { value1, value2 } = parseArguments(process.argv);

    const bmi: string | number = calculateBmi(value1,value2);

    console.log(BmiCalculator(bmi));

} catch (error) {
    console.log('Error, something bad happened, message: ', error.message);
}
