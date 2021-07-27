import React from 'react';
import { CoursePart } from '../types';

interface partProps {
    courseParts: CoursePart[];
}

/**
 * Helper function for exhaustive type checking
 */

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
}

const Part = ({ courseParts }: partProps): JSX.Element  => {

    return (
        <>
            {courseParts.map(part => {
                switch (part.type) {
                    case "normal":
                        {console.log(part.name)}
                          return(<>
                                    <h3>{part.name} {part.exerciseCount}</h3>
                                    <p>{part.description}</p>
                                </>)
                        
                        break;
                    case "groupProject":
                        return(<>
                            <h3>{part.name} {part.exerciseCount}</h3>
                            <p>Project exercises {part.groupProjectCount}</p>
                            </>)
                        break;
                    case "submission":
                        return(<>
                            <h3>{part.name} {part.exerciseCount}</h3>
                            <p>{part.description}</p>
                            <p>Submit to {part.exerciseSubmissionLink}</p>
                            </>)
                        break;
                    case "special":
                        return(<>
                            <h3>{part.name} {part.exerciseCount}</h3>
                            <p>{part.description}</p>
                            {part.requirements.map(requirement => {
                                <p>{requirement}</p>
                            })}

                        </>)
                        break;
                    default:
                        return assertNever(part);
                }
            })
            }
        </>
    )
}

export default Part;