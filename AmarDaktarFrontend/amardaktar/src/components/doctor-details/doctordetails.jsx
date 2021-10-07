import React,{useState,useEffect} from 'react';
import "./doctordetails.css";
import Card from '@material-ui/core/Card';
import { paginate } from '../../utils/paginate';
import Pagination from "../../common/HOC/pagination"
function DoctorDetials() {
    const [doctorList,setDoctorList] = useState([
        {
            name:"Dr.Tuhin",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1234B",
            fees:1200,
        },
        {
            name:"Dr.Hasina",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1994B",
            fees:1200,
        },
        {
            name:"Dr.Habib",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1994B",
            fees:1200,
        },
        {
            name:"Dr.Tamima",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1994B",
            fees:1200,
        },
        {
            name:"Dr.Sadia",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1994B",
            fees:1200,
        },
        {
            name:"Dr.Hasina",
            degree:"(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
            position:"Some where",
            experience:6,
            bmdc:"1994B",
            fees:1200,
        },

    ]
        
        
        )

        const [currentPage,setCurrentPage]=useState(1)
        const [size,setSize]=useState(4)
        const [doctors,setDoctors]=useState([])
        const [totalCount,setTotalCount]=useState(doctorList.length);


        const handlePageChange=(page)=>{
            setCurrentPage(page);
           
        }
        const getPageData=()=>{
            console.log("getPagecalled")
            const data = paginate(doctorList,currentPage,size)
           
            // setTotalCount(doctors.length)
            setDoctors(data)
        }

        useEffect(() => {
            getPageData()
             
        },[currentPage])
    return (
        <div className="container">
             <div >

         {doctors.map(doctor=>(
                
        <Card className="doctor-card">
        <div className="doctor-main">
            <section className="profile-pic">
                <img src={'assets/img/myself.jpg'} alt="doctor"></img>
            </section>
            <section className="doctor-info">
                <h5 className="name">{doctor.name}</h5>
                <p className="doctor-degree">{doctor.degree}</p>
                <p className="current-position">{doctor.position}</p>
            </section>
            {/* <hr className="border-area"></hr> */}
            <section className="doctor-more-info">
                  <h6>Experience: {doctor.experience} years</h6>
                  <h6>BMDC: {doctor.bmdc}</h6>
                  <h6>Fees: {doctor.fees}</h6>
                  <p>Contact Symbol</p>
                  <button className="appointment-button">Book Appointment </button>
            </section>
          
        </div>
       
        </Card>
   
         ))}
         <Pagination
        itemsCount={totalCount}
        pageSize={size}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
       
       />

      
        </div>
  
        </div>
       
  )
}

export default DoctorDetials

