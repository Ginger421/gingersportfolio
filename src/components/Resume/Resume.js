import * as React from 'react';
import VirginiaOwenResume from './VirginiaOwenResume.pdf'



const Resume = () => {

  return (
    <div>
        <p>
            If you would like to know more about my training or work experience please click the button to open my resume.
        </p>
        
        <a href={VirginiaOwenResume} download='VirginiaOwenResume' target='blank'>
            <button type='button'>View Resume</button> 
        </a>
    </div>
  )
}

export default Resume