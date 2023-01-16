import React, { Component } from "react";
import Calendar from 'react-calendar'
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import "./Appointment.css"
import Pagination from "./Pagination";
import TimeSlots from "./TimeSlots";


class Appointment extends Component {
    state = {
        currentPage: 1,
        recordsPerPage: 40,
        data: 30,
        timeSlots: [],
        day: new Date(),
        duration: '',
        start: ''
    }

    setCurrentPage = page => {
        this.setState({ currentPage: page })
    }

    componentDidMount = () => {
        const state = Object.keys(this.props.location.state).length > 0 ? this.props.location.state : this.state
        const { day, duration } = state
        this.setState({ day: day, duration: duration })
        this.processGetAxiosCall(day, duration)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if ((this.state.day !== prevState.day)) {
            const { day, duration } = this.state;
            this.processGetAxiosCall(day, duration)
        }
    }

    bookAppointment = async () => {
        const { day, start, duration } = this.state;
        const appointmentData = { day: day,  start: start, duration: duration }
        this.processPostAxiosCall(appointmentData)
    }

    onCalendarClicked = value => {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        const day = (new Date(value - tzoffset)).toISOString().slice(0, 10);
        this.setState({ day: day })
    }

    onTimeSlotClicked = start => {
        this.setState({ start: start })
    }

    processGetAxiosCall = (day, duration) => {
        axios.get(`http://localhost:8080/schedules/list_time_slots?day=${day}&duration=${duration}`)
            .then(res => {
                this.setState({ timeSlots: res.data.result });
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }

    processPostAxiosCall = (params) => {
        const { day, duration, start } = this.state;
        axios.post('http://localhost:8080/schedules', params)
            .then(res => {
                if (res.data.message == 'Timeslot saved successfully') {
                    this.props.history.push({ pathname: '/confirmation', state: { day: day, start: start, duration: duration } });
                }
            })
            .catch(() => {
                alert('There was an error while saving data')
                this.processGetAxiosCall(day, duration)
            })
    }

    render() {
        const indexOfLastTimeSlots = this.state.currentPage * this.state.recordsPerPage;
        const indexOfFirstTimeSlots = indexOfLastTimeSlots - this.state.recordsPerPage;
        const numOfPages = Math.ceil(this.state.timeSlots.length / this.state.recordsPerPage)
        const currentTimeSlots = this.state.timeSlots.slice(indexOfFirstTimeSlots, indexOfLastTimeSlots);

        return (
            <div className="container">
                <div className="row">
                    <h2 className="text-center mb-5">Book Your Slot</h2>
                    <div className="col-lg-6 vh-100">
                        <p>*Choose a different date that works for you?</p>
                        <Calendar onChange={this.onCalendarClicked} value={new Date(this.state.day)} />
                    </div>
                    <div className="col-lg-6 vh-100">
                        <p className="text-center">*Select timeslot from list of available timeslots</p>
                        <TimeSlots onAnyTimeSlotClicked={this.onTimeSlotClicked} timeSlots={currentTimeSlots} />
                        <div className="row">
                            <button className="btn mt-3 book-appointment w-75 m-auto" onClick={this.bookAppointment}>Book Appointment</button>
                            <Pagination
                                numberOfPages={ numOfPages }
                                currentPage = { this.state.currentPage }
                                setCurrentPage = { this.setCurrentPage }
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Appointment;
