import * as React from 'react';
import VirginiaOwenResume from './VirginiaOwenResume.pdf'



const Resume = () => {

  return (
    <div className='resume'>
        <p >
            If you would like to know more about my training or work experience please click the button to download my resume.
        </p>
        
        <a href={VirginiaOwenResume} download='VirginiaOwenResume' target='blank'>
            <button type='button'>Download</button> 
        </a>
    </div>
  )
}

export default Resume