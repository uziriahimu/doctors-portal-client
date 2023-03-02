import React from 'react';
import Bannar from '../Bannar/Bannar';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Terms from '../Term/Terms';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <InfoCards></InfoCards>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;