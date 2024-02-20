import React, { useState } from "react";
import './searchjobs.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Searchjobs(){
    const [data, setData] = useState([]);

    function handleSearch() {
        var inp = document.getElementById('inp').value;
        axios.get(`http://localhost:5000/jobs/${inp}`)
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    return(
        <>
            <div className="input-container d-flex ">
                <span className="icon">&#128269;</span>
                <input type="text" id="inp" placeholder="Enter your text here"/>
                <button type="button" onClick={handleSearch} className="search-btn">Search</button>
                <FontAwesomeIcon icon={faBarsStaggered} className="mt-2 ms-4" />
                <h4 className="ms-2 ">Filter</h4>
            </div>   
        </>
    )
}

export default Searchjobs;
