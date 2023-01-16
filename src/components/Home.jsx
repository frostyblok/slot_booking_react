import React, { Component } from "react";
import './Home.css';
import FormInput from "./FormInput";


class Home extends Component {
    state = {
        date: '',
        duration: ''
    }

    handleChange = (value, name) => {
        this.setState({ [name]: value })
    }

    checkAvailability = () => {
        this.props.history.push({ pathname: '/appointment', state: { day: this.state.date, duration: this.state.duration } });
    }

    render() {
        return (
            <div>
                <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                        <div className="flex flex-wrap formbold--mx-3">
                            <FormInput
                                name="date"
                                type="date"
                                label="date"
                                value={this.state.date}
                                handleInputChange={this.handleChange}
                            />
                            <FormInput
                                name="duration"
                                type="number"
                                label="duration (minutes)"
                                value={this.state.duration}
                                handleInputChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <button className="check-availability" onClick={this.checkAvailability}>Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
