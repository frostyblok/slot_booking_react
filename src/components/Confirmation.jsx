import React from "react";
import { Link } from "react-router-dom";
import './Confirmation.css'

function Confirmation({ location }) {
    const { day, start, duration } = location.state;
    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1>Thank you !</h1>
                    <p>You'll receive communication as regards next steps.</p>
                    <p>Slot successfully booked for {day} at {start} for {duration}</p>
                    <button className="dashboard">
                        <Link to="/"> Dashboard </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;
