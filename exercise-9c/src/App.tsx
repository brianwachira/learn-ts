import React from 'react';

const App = () => {
  const courseName = "Half Stack Application development";

  interface CoursePartBase {
    name : string;
    exerciseCount: number;
    type: string;
  }

  interface CourseNormalPart extends CoursePartBase{
    type: "normal";
  }

  interface CourseProjectPart extends CoursePartBase{
    type: "groupProject";
    groupProjectCount: number;
  }

  interface CourseSubmissionPart extends CoursePartBase{
    type: "submission";
    exerciseSubmissionLink: string;
  }

  interface CourseDescriptionPart extends CoursePartBase{
    description : string;
  }

  type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseDescriptionPart;
  
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

  interface ContentProps{
    courseParts: CoursePart[];
  }
  const Content = ({courseParts}: ContentProps) : JSX.Element => {
    return(
      <>
      {/* {courseParts.map((coursePart,index : number) =>
        <p key={index}>{coursePart.name} {coursePart.exerciseCount}</p>
        )} */}
      {courseParts.forEach(part => {
        switch(part.type){
          case "normal":
            <>
              <h5>{part.name} {part.exerciseCount}</h5>
              <p>{part.description}</p>
            </>
          break;
          case "groupProject":

        }
      })}
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
