import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./cover-image.css"
function CoverImage() {
    return (
        <div className="cover-area">
            <div className="cover-content">
                <section className="cover-title">
                    <h1>Find Your Doctor</h1>
                    <p>Get Telemedicine and Doctor Video Consultation service with 
                        thousands of Doctors and 
                        Hospitals in Bangladesh.
                    </p>
                </section>
                
                <div className="cover-button">
                    <button >Doctor</button>
                    <button>Hospital</button>
                </div>
                <section className="doctor-type-search">
                    <SearchIcon className="sIcon"/>
                     <input placeholder="search-me"/>
                </section>
            </div>
        </div>
    )
}

export default CoverImage
