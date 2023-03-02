import React, { useState } from 'react';
import AppointmentBannar from '../AppointmentBannar/AppointmentBannar';
import AppointmentOption from '../AvailableAppointment/AppointmentOption';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBannar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBannar>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>

        </div>
    );
};

export default Appointment;