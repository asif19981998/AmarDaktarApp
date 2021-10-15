import React from 'react'
import CommercialPartner from '../commercial-partner/cmp'
import CoverImage from '../cover-area/cover-image'
import DoctorDetials from '../doctor-details/doctordetails'
import FooterArea from '../footer-area/footer'
import MediaPartner from '../media-partner/medaiPartner'


function Home() {
    return (
        <div>
             <CoverImage/>   
             <DoctorDetials/>
             <CommercialPartner/>
             <MediaPartner/>
             <FooterArea/>
             
             
        </div>
    )
}

export default Home
