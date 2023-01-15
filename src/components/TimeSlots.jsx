import React from 'react'
import TimeSlot from "./TimeSlot";

const TimeSlots = ({ timeSlots, onAnyTimeSlotClicked }) => {
    function onClick(value) {
        onAnyTimeSlotClicked(value)
    }
    return (
        <div className="row flex-wrap">
            {timeSlots.map((timeSlot, index) => (
                <TimeSlot onTimeSlotClicked={onClick} timeSlot={timeSlot} key={index} />
            ))}
        </div>
    )
}

export default TimeSlots;
