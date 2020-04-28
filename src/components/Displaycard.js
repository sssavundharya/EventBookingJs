import React from 'react';

function Displaycard(props) {
    console.log(props)
    console.log(props.eventitems.eventName)
    const {  eventName , date, place , price, totalSeats,discount} = props.eventitems
    return (
        <div className="container">
            <div className="card">
                 <div className="card bg-light">
                    <div class="card-body text-center">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-xl-6">
                            <p className="card-text">Event Name</p>
                            <p className="card-text">Event Date:</p>
                            <p className="card-text">Location:</p>
                            <p className="card-text">Total Seat:</p>
                            <p className="card-text">Price:</p>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-6">
                                 <p className="card-text">{eventName}</p>
                                 <p className="card-text">{date}</p>
                                 <p className="card-text">{place}</p>
                                 <p className="card-text">{totalSeats}</p>
                                <p className="card-text"><strike>{price}</strike>
                                <span style={{color:'red'}}> {Math.floor(price-(price*(discount/100)))} </span>
                                <span> {discount}%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Displaycard;
