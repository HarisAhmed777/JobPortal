import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from '../index.js';
import './displayprofile.css'; // Import the CSS file

function DisplayProfile() {
    const [data, setData] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        // Fetch user profile data when the component mounts
        axios.post('http://localhost:5000/userprofile', { user })
        .then(res =>{
            setData([res.data]); // Assuming response is an array of objects
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, [user]);

    return (
        <div className="profile-container">
            {data.map((value, index) => (
                <div className="" key={index}>
                    <h3 className="profile-heading">Personal Details</h3>
                    <div className="personal-details">
                        <h3>First Name: <span className="mai">{value.first_name}</span></h3>
                        <h3>Last Name: <span className="mai">{value.last_name}</span></h3>
                        <h3>Mail id: <span className="mai">{value.email}</span></h3>
                        <h3>Username: <span className="mai">{value.username}</span></h3>
                        <h3>Gender: <span className="mai">{value.gender}</span></h3>
                        <h3>Phone number: <span className="mai">{value.phone}</span></h3>
                    </div>
                    <div className="address-section">
                        <h2>Address</h2>
                        <div className="address-details">
                            <h3>Street: <span className="mai">{value.address.street}</span></h3>
                            <h3>City: <span className="mai">{value.address.city}</span></h3>
                            <h3>State: <span className="mai">{value.address.state}</span></h3>
                            <h3>PinCode: <span className="mai">{value.address.zip_code}</span></h3>
                            <h3>Country: <span className="mai">{value.address.country}</span></h3>
                        </div>
                    </div>
                    <div className="education-section">
                        <h2>Education</h2>
                        <div className="education-details">
                            {value.education.map((educationItem, index) => (
                                <div key={index}>
                                    <h3>Degree: <span className="mai">{educationItem.degree}</span></h3>
                                    <h3>Major: <span className="mai">{educationItem.major}</span></h3>
                                    <h3>University: <span className="mai">{educationItem.university}</span></h3>
                                    <h3>Graduation Year: <span className="mai">{educationItem.graduation_year}</span></h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayProfile;
