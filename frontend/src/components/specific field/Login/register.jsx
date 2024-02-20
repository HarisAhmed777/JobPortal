import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        phonenumber: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", formData);
            if (res.data.message === "success") {
                alert("Your data is inserted");
                window.location.href = '/';
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("An error occurred while registering user");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center'>Registration form</h1>
                <input id="username" placeholder='Enter your full name' type='text' onChange={handleChange} value={formData.username} />
                <input id="email" placeholder='Enter your email id' type='text' onChange={handleChange} value={formData.email} />
                <input id="password" placeholder='Password' type='password' onChange={handleChange} value={formData.password} />
                <input id="firstName" placeholder='First Name' type='text' onChange={handleChange} value={formData.firstName} />
                <input id="lastName" placeholder='Last Name' type='text' onChange={handleChange} value={formData.lastName} />
                <input id="dob" placeholder='Date of Birth' type='date' onChange={handleChange} value={formData.dob} />
                <input id="gender" placeholder='Gender' type='text' onChange={handleChange} value={formData.gender} />
                <input id="phonenumber" placeholder='Phone number' type='text' onChange={handleChange} value={formData.phonenumber} />
                <button className='btn btn-primary'>Submit</button>
                <Link to='/login'>Back to Login Page</Link>
            </form>
        </>
    );
}

export default Register;
