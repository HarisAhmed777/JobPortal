import React, { useContext } from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../../index.js';
  

function DisplayBackend(){
    const [data, setData] = useState([]);
    const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);


    useEffect(() => {
      fetch('http://localhost:5000/Backend')
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
        <div className='row'>
            <h5>results for Back End  developer</h5>
          {/* Mapping over the data array and rendering a card for each job */}
          {data.map((value, index) => (
            <div key={index} className='card col-lg-3 ms-2 m-3'>
              <div className='card-title'>
                <div className='card-body'>
                  <h4>{value.title}</h4>
                  <h5>{value.company}</h5>
                  <h6>{value.salary}</h6>
                  <h6>{value.description}</h6>
                  {isAuthorized ? (
                    <Link to={`/displayspecific/${value._id}`}>
                      <button className='btn btn-primary rounded-pill'>View More</button>
                    </Link>
                  ) : (
                    <Link to={`/login`}>
                      <button className='btn btn-primary rounded-pill'>View More</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}

export  default DisplayBackend;