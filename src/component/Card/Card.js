import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, descriptions, img, time, age } = props.data;

    return (
        <div>

            <div class="col">
                <div class="card h-100 w-100 shadow p-2">
                    <img src={img} alt="" class="card-img-top image"></img>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{name}</h5>
                        <p class="card-text text-muted">{descriptions.slice(0, 80)}...</p>
                        <p><small>For Age: <span className='fw-bold'>{age}</span></small></p>
                        <p><small>Time required :<span className='fw-bold'>{time}s</span> </small></p>
                    </div>
                    <div class="card-footer">
                        {/* Button clicking  */}
                        <button onClick={() => props.handleExercise(props.data)} className='btn btn-info w-100 fw-bold text-dark'>Add to List</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Card;