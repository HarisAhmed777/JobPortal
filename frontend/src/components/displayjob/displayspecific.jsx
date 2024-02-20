import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './displayspecific.css';
function Displayspecific() {
    const { _id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/displayspecific/${_id}`)
        .then(res => res.json())
        .then(view => {
          console.log("Received data:", view); // Log the received data
          // Check if the received data is an array
          if (Array.isArray(view)) {
            setData(view);
          } else if (typeof view === 'object' && view !== null) {
            // If the received data is a single object, wrap it in an array
            setData([view]);
          } else {
            console.error("Received data is not an array or object:", view);
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    return (
      <>
          {/* Mapping over the data array and rendering a card for each job */}
          {data.map((value, index) => (
            <div key={index} className="displayspecific">
                  <h4>More info about the {value.company}</h4>
                  <h5>Company name : {value.company}</h5>
                  <h5>Title of the job: {value.title}</h5>
                  <h5>Salary range is :{value.salary}</h5>
                  <h5>location of the company:{value.location}</h5>
                  <h5>Description : {value.description}</h5>
                  <h5>Requriemnts : {value.requirements}</h5>
                  <Link to = '/'><button>Back to view all jobs</button></Link>
                  <Link to ={`/apply/${value._id}`}><button>Apply</button></Link>

  
            </div>
              
          ))}
      </>
    );
  }

export default Displayspecific;
