import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Card from '../Card/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-duotone fa - dumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (

        <div>
            <div className='header-container'>
                <div className='container mt-5 ms-5 header '>
                    {/* <FontAwesomeIcon icon="fa-duotone fa-dumbbell"></FontAwesomeIcon> */}
                    <h3 className='fw-bold'>The Workout Zone</h3>
                    <h5>Select today’s exercise</h5>
                    <div className='container mt-5'>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                data.map((data) => <Card data={data} key={data.id}></Card>)
                            }
                        </div>
                    </div>
                </div>

                <div className="summery-container">
                    <Activity></Activity>
                </div>

            </div>
        </div>
    );
};

export default Header;