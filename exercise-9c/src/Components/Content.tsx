import React from 'react';
import Part from './Part';
import { CoursePart } from '../types';

  interface ContentProps{
    courseParts: CoursePart[];
  }
  
  const Content = ({courseParts}: ContentProps): JSX.Element => {
    return(
      <>
        <Part courseParts = {courseParts}/>
      </>
    )
  }
  export default Content;