interface response {
    weight: number;
    height: number;
    bmi: string;
};
interface responseError {
    error: string
};


export const  bmiCalculatorModule= (a: any, b: any) : response | responseError => { /* no clue what the type will be! */

    const bmiValue: any = (a/b/b) * 10000;

    switch (true) {
        case (bmiValue < 18.5):
            return {
                weight: a,
                height: b,
                bmi: 'Underweight (unhealthy weight)',
            };
        case (bmiValue > 18.5 && bmiValue <=25):
            return {
                weight: a,
                height: b,
                bmi: 'Normal (healthy weight)',
            };
        case (bmiValue > 25):
            return {
                weight: a,
                height: b,
                bmi: 'Overweight (unhealthy weight)',
            };
        default:
            return {
                error: 'malformatted parameters'
            }
    }

}