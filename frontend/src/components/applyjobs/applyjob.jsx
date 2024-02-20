import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from '../../index.js';
import axios from 'axios';

function Applyjob() {
    const { user, isAuthorized } = useContext(Context);
    const { _id: jobId } = useParams();
    const [applied, setApplied] = useState(false); // State to track whether job is already applied

    useEffect(() => {
        // Check if the user object is defined and if the job is already applied
        if (isAuthorized && user && user.appliedJobs && user.appliedJobs.includes(jobId)) {
            setApplied(true);
        }
    }, [isAuthorized, user, jobId]);

    const handleApply = () => {
        // Send a request to backend to apply for the job
        axios.post(`http://localhost:5000/users/${user}/apply/${jobId}`)
            .then(response => {
                // Update local state to indicate that job has been applied
                setApplied(true);
                console.log('Job applied successfully:', response.data);
            })
            .catch(error => {
                console.error('Error applying for job:', error);
            });
    };

    return (
        <>
            {isAuthorized ? (
                <>
                    {applied ? (
                        <h1>You have already applied for this job.</h1>
                    ) : (
                        <button onClick={handleApply}>Apply for Job</button>
                    )}
                </>
            ) : (
                <h1>Please log in to apply for jobs.</h1>
            )}
        </>
    );
}

export default Applyjob;
