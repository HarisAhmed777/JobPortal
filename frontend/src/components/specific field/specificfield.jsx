import React, { useState } from 'react';
import './specificfeild.css';
import Displayjob from '../displayjob/displayjob';
// import DisplayProgrammer from '../displayspecificfeild.jsx/displayprogarmmer';
import DisplayWebdeveloper from '../displayspecificfeild.jsx/displayprogarmmer';
import DisplayFullStackdeveloper from '../displayspecificfeild.jsx/displayfullStack';
import DisplayBackend from '../displayspecificfeild.jsx/displayBackend';

function App() {
  const [displayedComponent, setDisplayedComponent] = useState(null);

  const handleClick = (componentName) => {
    if (displayedComponent === componentName) {
      setDisplayedComponent(null); // Toggle off the clicked state
    } else {
      setDisplayedComponent(componentName); // Set the clicked state
    }
  };

  return (
    <div className="d-inline-block sel">
      {["Web Developer", "Full Stack Developer", "Backend Developer", "Digital Marketing"].map((item, index) => (
        <h5 
          key={index}
          className={`m-3 h55 selectoption ${displayedComponent === item ? "clicked" : ""}`} // Apply "clicked" class conditionally
          onClick={() => handleClick(item)}
        >
          {item}
        </h5>
      ))}
      {displayedComponent === "Web Developer" && <DisplayWebdeveloper />}
      {displayedComponent === "Full Stack Developer" && <DisplayFullStackdeveloper />}
      {displayedComponent === "Backend Developer" && <DisplayBackend />}


      {displayedComponent === null && <Displayjob />}
    </div>
  );
}

export default App;
