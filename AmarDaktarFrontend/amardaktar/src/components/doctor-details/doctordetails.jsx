import React from 'react';
import "./doctordetails.css";
import Card from '@material-ui/core/Card';
function DoctorDetials() {
    return (
        <div className="container">
             <div className="doctor-card">
        <Card >
            <div className="doctor-main">
                <section className="profile-pic">
                    <img src={'assets/img/myself.jpg'} alt="doctor"></img>
                </section>
                <section className="doctor-info">
                    <h5 className="name">DR. Huda</h5>
                    <p className="doctor-degree">(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))</p>
                    <p className="current-position">General Physician, Medicine, COVID-19 (Coronavirus)
                    Present position: Assistant Registrar (Medicine), Armed Forces
                     Medical College,
                    Dhaka Cantonment, Dhaka</p>
                </section>
                {/* <hr className="border-area"></hr> */}
                <section className="doctor-more-info">
                      <h6>6 years Experience </h6>
                      <h6>BMDC - A 69678</h6>
                      <h6>Fees: 200.00TK</h6>
                      <p>Contact Symbol</p>
                      <button className="appointment-button">Book Appointment </button>
                </section>
              
            </div>
           
        </Card>
       
        </div>
  
        </div>
       
  )
}

export default DoctorDetials

