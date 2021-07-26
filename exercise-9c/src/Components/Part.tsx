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

const Part = ({ courseParts }: partProps) => {
    courseParts.forEach(part => {
        switch (part.type) {
            case "normal":
                return(
                    <>
                        <h3>{part.name} {part.exerciseCount}</h3>
                        <p>{part.description}</p>
                    </>
                    )
                break;
            case "groupProject":
                <>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>Project exercises {part.groupProjectCount}</p>
                </>
                break;
            case "submission":
                <>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>{part.description}</p>
                    <p>Submit to {part.exerciseSubmissionLink}</p>
                </>
                break;
            case "special":
                <>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>{part.description}</p>
                    {part.requirements.map(requirement => {
                     <p>{requirement}</p>   
                    })}

                </>
                break;
            default:
                return assertNever(part);
        }
    });

    return (
    <>

    </>)
}

export default Part;