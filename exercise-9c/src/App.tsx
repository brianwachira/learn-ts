import React from 'react';
import Content from './Components/Content';
import { CoursePart } from './types';

const App = () => {
  const courseName = "Half Stack Application development";
  
  // this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
]

  interface HeaderProps {
     name: string
  }

  const Header = ({name}: HeaderProps): JSX.Element => {
    return (
      <>
        <h1>{name}</h1>
      </>
    )
  }
  
  interface TotalProps {
    total: number
  }
  const Total = ({total}: TotalProps): JSX.Element => {
    return (
      <>  
      <p>
        Number of exercises{" "}
        {total}
      </p>
      </>
    )
  }  
  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total total={courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)} />
    </div>
  );
};

export default App;
