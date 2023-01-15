import React from 'react'

const TimeSlot = ({ timeSlot, onTimeSlotClicked }) => {
    function onClick({ target }) {
        onTimeSlotClicked(target.value)
    }

    return (
        <div className="col-2 button">
            <input type="radio" name="check-substitution-2" value={timeSlot} onClick={onClick} />
            <label className="btn btn-default" htmlFor="a25">{timeSlot}</label>
        </div>
    )
}

export default TimeSlot;
