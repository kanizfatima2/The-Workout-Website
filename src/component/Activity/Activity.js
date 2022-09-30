/* eslint-disable no-undef */
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Activity.css";

const Activity = ({ data }) => {
    //adding total exercise Time
    let total = 0;
    for (const time of data) {
        total = total + time.time;
    }
    // Set breaktime 
    const [breaktime, setBreaktime] = useState("");
    const breakTime = (e) => {
        setBreaktime(e.target.innerHTML);
    }
    //Adding Toast
    const notify = () => {
        toast.success('Activity Completed!!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div>
            <div className="profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyWdJsWrW7Dggfl6IgDCMTb7Qp_m56RcV8A&usqp=CAU" className='rounded-circle' alt="" />
                <div className='mt-2'>
                    <p className='fw-bold mb-0'>John Andrew</p>
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <small className='ms-1'>Dhaka,Bangladesh</small>
                </div>
            </div>
            <div className="Profile-info mt-3">
                <div className="weight">
                    <p className='fw-bold mb-0'>75 <span className='text-muted fw-light'>kg</span></p>
                    <p className='text-muted'><small>Weight</small></p>
                </div>
                <div className="height ">
                    <p className='fw-bold mb-0'>6.5 </p>
                    <p className='text-muted'><small>Height</small></p>
                </div>
                <div className="age">
                    <p className='fw-bold mb-0'>30 <span className='text-muted fw-light'>yrs</span> </p>
                    <p className='text-muted'><small>Age</small></p>
                </div>
            </div>
            <p className='fw-bold ms-3 mt-4'>Add a Break</p>
            <div className="break-container py-3 text-wrap">
                <button onClick={(e) => breakTime(e)} className='btn btn-info rounded-circle text-sm-center'>10s</button>
                <button onClick={(e) => breakTime(e)} className='btn btn-info rounded-circle'>20s</button>
                <button onClick={(e) => breakTime(e)} className='btn btn-info rounded-circle'>30s</button>
                <button onClick={(e) => breakTime(e)} className='btn btn-info rounded-circle'>40s</button>
                <button onClick={(e) => breakTime(e)} className='btn btn-info rounded-circle'>50s</button>
            </div>
            {/* //Calculation part  */}
            <p className='fw-bold ms-3 mt-4'>Exercise Details</p>
            <div className="details ms-3 mt-4 p-3 me-3">
                <p>Exercise Time: <span className='fw-bold'>{total}</span> seconds</p>
                <p>Break Time: <span className='fw-bold'> {breaktime}</span>
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <button onClick={notify} className='btn btn-info w-75 fw-bold mt-3 mb-3'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Activity;