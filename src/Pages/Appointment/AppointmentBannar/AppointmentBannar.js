import React, { useState } from 'react';
import chaire from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBannar = ({ selectedDate, setSelectedDate }) => {

    return (
        <div>
            <header className='my-6'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chaire} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='mr-6 sm:w-full'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AppointmentBannar;